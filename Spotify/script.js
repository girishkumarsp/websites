//declaration of variables
let songIndex = 0;
let masterplay = document.getElementById("masterplay");
let audioElement = new Audio("./songs/1.mp3");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songItemPlay = Array.from(document.getElementsByClassName("songItemPlay"));
let timestamp = Array.from(document.getElementsByClassName("timestamp"));
let song_photo = document.getElementById("song_photo");

let songs = [
    {songName: "Left and Right", filePath: "./songs/1.mp3", coverPath:"./covers/1.jpg"},
    {songName: "We Don't Talk Anymore", filePath: "./songs/2.mp3", coverPath:"./covers/2.jpg"},
    {songName: "See You Again", filePath: "./songs/3.mp3", coverPath:"./covers/3.jpg"},
    {songName: "Attention", filePath: "./songs/4.mp3", coverPath:"./covers/4.jpg"},
    {songName: "Girlfriend", filePath: "./songs/5.mp3", coverPath:"./covers/5.jpg"},
    {songName: "How Long", filePath: "./songs/6.mp3", coverPath:"./covers/6.jpg"},
    {songName: "Suffer", filePath: "./songs/7.mp3", coverPath:"./covers/7.jpg"},
    {songName: "That's Hilarious", filePath: "./songs/8.mp3", coverPath:"./covers/8.jpg"},
    {songName: "Light Switch", filePath: "./songs/9.mp3", coverPath:"./covers/9.jpg"},
    {songName: "Marvin Gaye", filePath: "./songs/10.mp3", coverPath:"./covers/10.jpg"},
]

//update the song duration
timestamp.forEach((element, i)=>{ 
    let audioElement1 = new Audio(songs[i].filePath);
    audioElement1.onloadedmetadata = function () {
        duration_song = new Date(1000 * audioElement1.duration).toISOString().substr(14, 5);
        document.getElementsByClassName("timestamp")[i].innerText = duration_song;
    }
})


songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
    // element.getElementsByClassName("timestamp")[0].innerText = duration_song; 
});
 

//Play and Pause button
masterplay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
        song_photo.style.opacity=1;
        masterSongName.style.opacity = 1;
    }else{
        audioElement.pause();
        masterplay.classList.add("fa-circle-play");
        masterplay.classList.remove("fa-circle-pause");
        gif.style.opacity = 0;
        song_photo.style.opacity=0;
        masterSongName.style.opacity = 0;
    }

})

//Listen to events
audioElement.addEventListener("timeupdate",()=>{
    //update seekbar
    progress = ((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime = ((myProgressBar.value * audioElement.duration)/100);
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}


songItemPlay.forEach((element)=> {
    element.addEventListener("click",(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src = `./songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        song_photo.src = `./covers/${songIndex+1}.jpg`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        song_photo.style.opacity=1;
        masterSongName.style.opacity = 1;
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");
    })
})


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    song_photo.src = `./covers/${songIndex+1}.jpg`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    song_photo.style.opacity=1;
    masterSongName.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    song_photo.src = `./covers/${songIndex+1}.jpg`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    song_photo.style.opacity=1;
    masterSongName.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})