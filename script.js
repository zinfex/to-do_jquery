$('#btn').on('click', function() {
    let tarefa = $('#task').val()
    $('ul').append('<li>' + tarefa + '</li>')
})

$('#clear').on('click', function(){
    $('li').remove()
})