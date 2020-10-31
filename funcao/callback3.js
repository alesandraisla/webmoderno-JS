//Exemplo de callback no browser
//não é obrigado a declarar o evento

document.getElementsByTagName('body')[0].onclick = function(evento){
    console.log('O evento ocorreu!!')
}