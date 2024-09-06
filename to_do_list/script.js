
/*
    lista de passo a passo
    [x] saber quando botão foi clicado
    [x] pegar o texto dentro do input
    [x] colocar esse texto na tela
    [] deletar a tarefa da tela
 
*/

function adicionarTarefa() {

    

    let txtInput = document.querySelector('input').value
    
    let li = document.createElement('li')
    li.innerHTML = txtInput + '<span onclick="deletTarefa(this)">❌</span>'

    document.querySelector('ul').appendChild(li)

    document.querySelector('input').value = ''
}


function deletTarefa(li) {
    li.parentElement.remove()
}