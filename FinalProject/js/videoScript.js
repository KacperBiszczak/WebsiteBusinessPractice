const video = document.querySelector("video");
const btnPlay = document.querySelector(".btnPlay");

function togglePlay(){
    video.paused ? video.play() : video.pause();
    togglebtnPlayVisibility();
}

function togglebtnPlayVisibility(){
    btnPlay.classList.contains("hidden") ? btnPlay.classList.remove("hidden") : btnPlay.classList.add("hidden") 
}

video.addEventListener('click', ev =>{
    togglePlay();
})

btnPlay.addEventListener('click', ev =>{
    togglePlay();
})