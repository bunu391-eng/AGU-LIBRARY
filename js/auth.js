async function login(){

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

const { error } =
await supabase.auth.signInWithPassword({

email: email,
password: password

});

if(error){

alert(error.message);
return;

}

alert("Login successful!");

window.location.href="admin.html";

}
