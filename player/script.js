

const songName = document.getElementById("song-name");
const bandName = document.getElementById("band-name");
const song = document.getElementById('audio');
const cover = document.getElementById('cover');

const play = document.getElementById('play');
const previous = document.getElementById('previous');
const next = document.getElementById('next');

const shuffleButton = document.getElementById('shuffle');

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
let ishuffled = false;
const orignalPlaylist = [asYouWere,home,fallen,Evanescence];
let sortedPlaylist = [...orignalPlaylist];
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
    cover.src = `images/${sortedPlaylist[index].file}.jpg`;
    song.src = `audios/${sortedPlaylist[index].file}.mp3`;
    songName.innerText = sortedPlaylist[index].songName;
    bandName.innerText = sortedPlaylist[index].artist;
}

//voltar musica-----------
function previousSong(){
    if(index === 0){
        index = sortedPlaylist.length - 1;
    }
    else{
        index -= 1
    }
    initializeSong();
    playSong();
    
};

//avançar musica-----------
function nextSong(){
    if(index === sortedPlaylist.length - 1){
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


//embaralhar
function shuffleArray(preshuffleArrey) {
    const size = preshuffleArrey.length;
    let currentIndex = size - 1;
    while(currentIndex > 0){
        let randomIndex = Math.floor(Math.random()*size);
        let aux = preshuffleArrey[currentIndex];
        preshuffleArrey[currentIndex] = preshuffleArrey[randomIndex];
        preshuffleArrey[randomIndex] = aux;
        currentIndex -= 1;
    }
}

function shuffleButtonClicked(){
    if(ishuffled === false){
        ishuffled = true;
        shuffleArray(sortedPlaylist);
        shuffleButton.classList.add('button-active');
    }
    else{
        ishuffled = false;
        sortedPlaylist = [...orignalPlaylist];
        shuffleButton.classList.remove('button-active');
    }
}

initializeSong();

play.addEventListener('click', playPauseDecider);
previous.addEventListener('click', previousSong);
next.addEventListener('click', nextSong);
song.addEventListener('timeupdate', updateProgressBar)
progressContainer.addEventListener('click', jumpTo)
shuffleButton.addEventListener('click', shuffleButtonClicked)