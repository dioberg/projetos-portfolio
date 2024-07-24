
const contador = document.querySelector('.contador');
const progresso = document.querySelector('.progresso');

let conta = 4;
let progress = 16;

const loading = setInterval(load, 100);

function load() {
    if(conta == 100 && progress == 400) {
        clearInterval(loading);
        contador.classList.add('efeito-txt');
        progresso.classList.add('efeito-txt');
        progresso.classList.add('active');
    }else {
        conta += 1;
        progress += 4;

        contador.textContent = conta + '%';
        progresso.style.width = progress + 'px'
    }
}