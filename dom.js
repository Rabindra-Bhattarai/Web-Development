const name=documeb

document.addEventListener("DOMContentLoaded", () =>{
    let name=document.getElementById("name");

function changeName(ev){
    console.log(ev);
    console.log(ev.target.value);
    
}
name.addEventListener("change", changeName);
})