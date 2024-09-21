let progress = document.getElementById("progress");
let controlIcon = document.getElementById("controlIcon");
let song = document.getElementById("song");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playpause(){
    if(controlIcon.classList.contains("fa-play")){
        song.play();
        controlIcon.classList.add("fa-pause");
        controlIcon.classList.remove("fa-play");
    }
    else{
        song.pause();
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },1000)
}
progress.onchange = function(){
    song.play();
    song.currentTime =progress.value;
    controlIcon.classList.add("fa-pause");
    controlIcon.classList.remove("fa-play");
}