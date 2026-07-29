// ==========================
// AGU LIBRARY APP
// ==========================

async function loadMedia() {

const { data, error } = await supabase
.from(TABLE)
.select("*")
.order("created_at", { ascending: false });

if (error) {
console.error(error);
return;
}

displayMedia(data);
}

function displayMedia(files) {

const imageGallery = document.getElementById("imageGallery");
const ebookGallery = document.getElementById("ebookGallery");

imageGallery.innerHTML = "";
ebookGallery.innerHTML = "";

files.forEach(file => {

if (file.type.startsWith("image")) {

imageGallery.innerHTML += &lt;div class="card"&gt; &lt;img src="${file.url}" style="width:100%;border-radius:8px;">
<h3>`${file.name}</h3>

<a href="${file.url}" download class="btn"&gt; Download Image &lt;/a&gt; &lt;/div&gt;;

}

if (file.type === "application/pdf") {

ebookGallery.innerHTML += `
<div class="card">

<h3>`${file.name}</h3>

<iframe
src="$`{file.url}"
style="width:100%;height:300px;border:none;">
</iframe>

<br><br>

<a href="`${file.url}"
target="_blank"
class="btn">

Read / Download PDF

</a>

</div>
`;
}

});

}

loadMedia();