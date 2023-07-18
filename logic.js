let nav = document.querySelector(".hamburger");

const icon =  nav.childNodes[1]
nav.addEventListener("click", ()=>{
    icon.classList.toggle("fa-x")
})
