const audio = document.querySelector("#audio");
const playPause = document.querySelector("#play");
const ImagP = document.querySelector("#playImagen");
const imagL = document.querySelector("#pauseImagen");

playPause.addEventListener("click", () => {
    if(audio.paused || audio.ended){
        ImagP.style.display='none';
        imagL.style.display='flex';
        audio.play();
    }else{
        audio.pause();
        ImagP.style.display='flex';
        imagL.style.display='none';
        
    }
});

