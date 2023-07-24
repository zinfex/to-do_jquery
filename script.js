let lista = []
console.log(lista)

let i = 0

$('#btn').on('click', function() {

    let tarefa = $('#task').val()
    lista.push(tarefa)

    $('ul').append(`<li id="${i}"> ${tarefa} <div id="edit"> <i class="fa-solid fa-check" onclick="check(${i})"></i>
    <i class="fa-solid fa-trash" onclick="trash(${i})"></i> </div> </li>`)

    i = i+1
})

$('#clear').on('click', function(){
    $('li').remove()    
    lista.length = 0
})

$('.fa-solid fa-check').on('click', function(){
    $('li').css("background-color", "green")
})

function check(indice) {
    let li = document.querySelectorAll('li')
    li[indice].classList.toggle('green')
}