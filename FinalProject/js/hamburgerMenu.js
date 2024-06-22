const btnMenu = document.querySelector(".btnMenu");
const nav = document.querySelector("nav");

function showNav(){
    if(btnMenu.classList.contains("active")){
        btnMenu.classList.remove("active");
        nav.style.transform = "scaleX(0);";
        nav.displa
    }
    else{
        btnMenu.classList.add("active")
    }
}

btnMenu.addEventListener("click", ev =>{
    showNav();
});