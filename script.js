let lista = []
console.log(lista)

let i = 0

$('#btn').on('click', function() {
    let tarefa = $('#task').val()

    if (tarefa == '') {
        alert('Escreva uma tarefa')
    } else {
        lista.push(tarefa)
        listarDados()
    }
})

function listarDados() {
    $('#campo').html('')

    lista.map((tarefa, i) => {
        $('ul').append(`<li id="${i}"> ${tarefa} <div id="edit"> <i class="fa-solid fa-check" onclick="check(${i})"></i>
        <i class="fa-solid fa-trash" onclick="trash(${i})"></i> </div> </li>`)
    })
}

$('#clear').on('click', function(){
    $('li').remove()    
    lista.length = 0
})

function check(indice) {
    let li = document.querySelectorAll('li')
    li[indice].classList.toggle('green')
}

function trash(indice) {
    $('li').remove(indice)   
    lista.splice(indice, 1)
    listarDados()
}
