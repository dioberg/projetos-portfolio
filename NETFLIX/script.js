



let botaoSom =  document.querySelector('.btn-som')
let video = document.querySelector('.video')
let botao = document.querySelector('.link-info')
let modal = document.querySelector('.modal')
let audio = document.querySelector('.audio')

//ligar som

botaoSom.addEventListener('click', ligaSom)

function ligaSom() {
    video.muted = !video.muted
    // ! = inverso / inverte tudo
    // se ta mudo, ele vai tocar,  se tiver tocando ele vai deixar mudo
}

//mostrar modal

botao.addEventListener('click', mostrarModal)
modal.addEventListener('click', fecharModal)

function mostrarModal() {
    modal.style.display = 'block'
}

function fecharModal() {
    modal.style.display = 'none'
}

//tocar audio
//window => 
window.addEventListener("load", tocarAudio)

function tocarAudio() {
    audio.play()
}