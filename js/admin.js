const uploadForm = document.getElementById("uploadForm");

uploadForm.addEventListener("submit", uploadFile);

async function uploadFile(e){

e.preventDefault();

const title = document.getElementById("title").value;

const category = document.getElementById("category").value;

const file = document.getElementById("file").files[0];

if(!file){

alert("Please select a file.");

return;

}

const filename = Date.now() + "-" + file.name;

const { error } = await supabase.storage
.from(BUCKET)
.upload(filename, file);

if(error){

alert(error.message);

return;

}

const { data } = supabase.storage
.from(BUCKET)
.getPublicUrl(filename);

const result = await supabase
.from(TABLE)
.insert({

name: title,

category: category,

type: file.type,

url: data.publicUrl

});

if(result.error){

alert(result.error.message);

return;

}

alert("Upload successful!");

location.reload();

}

async function loadFiles(){

const { data, error } = await supabase
.from(TABLE)
.select("*")
.order("created_at", { ascending: false });

if (error) {
alert(error.message);
return;
}


const div = document.getElementById("adminFiles");

div.innerHTML = "";

data.forEach(file=>{

div.innerHTML += `
<div class="card">

<h3>${file.name}</h3>

<p>${file.category}</p>



<a href="${file.url}" target="_blank" class="btn">

Open

</a>

</div>
`;

});

}

loadFiles();
