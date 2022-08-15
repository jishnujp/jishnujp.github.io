var toggle = document.querySelector(".toggle");
var nav = document.querySelector(".navbar");


function toggleMenu(){
    if (nav.classList.contains("active")){
        nav.classList.remove("active");
    }else{
        nav.classList.add("active");
    }
}

toggle.addEventListener('click',toggleMenu,false);