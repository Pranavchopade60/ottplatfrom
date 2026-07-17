const form=document.getElementById("signupForm");

form.addEventListener("submit",createUser);

function createUser(e){

e.preventDefault();

const name=document.getElementById("name").value.trim();

const email=document.getElementById("email").value.trim();

const password=document.getElementById("password").value;

const confirm=document.getElementById("confirmPassword").value;

if(password!==confirm){

alert("Passwords do not match.");

return;

}

const user={

name:name,

email:email,

password:password

};

localStorage.setItem("cineverseUser",JSON.stringify(user));

const btn=document.querySelector(".login-btn");

btn.innerHTML="✔ Account Created";

btn.style.background="#0f9d58";

setTimeout(()=>{

window.location.href="login.html";

},1500);

}

document.querySelector(".logo").addEventListener("click",()=>{

window.location.href="index.html";

});