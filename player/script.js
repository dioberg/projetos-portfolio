

const songName = document.getElementById("song-name");
const bandName = document.getElementById("band-name");
const song = document.getElementById('audio');
const cover = document.getElementById('cover');

const play = document.getElementById('play');
const previous = document.getElementById('previous');
const next = document.getElementById('next');

const progressContainer = document.getElementById('progress-container');



const asYouWere = {
    songName : 'Atlas, Rise!',
    artist : 'Metallica',
    file : 'Atlas_Rise!'
};

const home = {
    songName : 'Evanescence_Bring_Me_To_Life',
    artist : 'evanescence',
    file : 'Evanescence_Bring_Me_To_Life'
};

const fallen = {
    songName : "Evanescence_Call_Me_When_",
    artist : 'Evanescence',
    file : "Evanescence_Call_Me_When_"
};

const Evanescence = {
    songName : 'Evanescence_Going_Under_Live',
    artist : 'Evanescence',
    file : 'Evanescence_Going_Under_Live'
};

let isPlaying = false;
const playlist = [asYouWere,home,fallen,Evanescence];
let index = 0;

//play musica-----------
function playSong() {
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    isPlaying = true;
}

//pouse musica-----------
function pauseSong() {
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    song.pause();
    isPlaying = false;
}

//funçao de decisao

function playPauseDecider(){
    if(isPlaying === true){
        pauseSong();
    }else{
        playSong();
    }
}

//mudar capa/ mudar audios/ nome / banda 0u cantor da musica-----------
function initializeSong(){
    cover.src = `images/${playlist[index].file}.jpg`;
    song.src = `audios/${playlist[index].file}.mp3`;
    songName.innerText = playlist[index].songName;
    bandName.innerText = playlist[index].artist;
}

//voltar musica-----------
function previousSong(){
    if(index === 0){
        index = playlist.length - 1;
    }
    else{
        index -= 1
    }
    initializeSong();
    playSong();
    
};

//avançar musica-----------
function nextSong(){
    if(index === playlist.length - 1){
        index = 0;
    }
    else{
        index += 1
    }
    initializeSong();
    playSong();
    
};

//barra de progresso-------------
function updateProgressBar() {
    const barWidth = (song.currentTime / song.duration) * 100;
    currentProgress.style.setProperty('--progress', `${barWidth}%`);
}

function jumpTo(event) {
    const width = progressContainer.clientWidth;
    const clickPosition = event.offsetX;
    const jumpToTime = (clickPosition / width) * song.duration;
    song.currentTime = jumpToTime;
}

initializeSong();

play.addEventListener('click', playPauseDecider);
previous.addEventListener('click', previousSong);
next.addEventListener('click', nextSong);
song.addEventListener('timeupdate', updateProgressBar)
progressContainer.addEventListener('click', jumpTo)