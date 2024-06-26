const btnMenu = document.querySelector(".btnMenu");
const nav = document.querySelector("nav");

function showNav(){
    if(btnMenu.classList.contains("active")){
        btnMenu.classList.remove("active");
        nav.style.display = "none";
    }
    else{
        btnMenu.classList.add("active")
        nav.style.display = "flex";
    }
}

btnMenu.addEventListener("click", ev =>{
    showNav();
});