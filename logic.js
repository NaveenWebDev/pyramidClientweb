const nav = document.querySelector(".hamburger");
const navlinks = document.querySelector("ul.nav-links");
const icon =  nav.childNodes[1]
nav.addEventListener("click", ()=>{
    icon.classList.toggle("fa-x")
    navlinks.classList.toggle("ham")
})

$(document).ready(function(){
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $("nav").css("background", "black");
        } else {
            $("nav").css("background", "transparent");
        }
    });
})
