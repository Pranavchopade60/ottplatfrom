function selectProfile(name){

localStorage.setItem(

"activeProfile",

name

);

window.location.href="index.html";

}

document.querySelector(".add-profile")
.addEventListener("click",()=>{

const profile=prompt("Enter Profile Name");

if(profile){

localStorage.setItem(

"profile2",

profile

);

alert("Profile Created");

location.reload();

}

});