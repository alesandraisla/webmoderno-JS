//Promises - > Promessa de algo que vai ser executado e desenvolvido no futuro 
// a função de dentro da promises será chamada quando for cumprir a promessa 


let a = 1
console.log(a)

//Gera apenas um único valor
//Caso queira mais de um valor, retornará em objeto ou array
let promessa = new Promise(function(resolve) {
// cumprirPromessa(3)
//    cumprirPromessa({
//        x: 3,
//        y: 4
//    })
resolve(['Bia', 'Ana', 'Suzy', 'Bryan'])
})

// console.log(typeof promessa) // objeto
// console.log(typeof Promise) // function 

//Para acessar o valor passado pela promise usa o método then 
//Conceito de callback
promessa.then(function(valorcumprido) {
    console.log(valorcumprido)
    //console.log(valorcumprido.x)
})

//ou para simplificar 
promessa.then(valor => console.log(valor))


//Pode fazer isso com as demais funções de dentro do then 
function primeiroElemento(array) {
    return array[0]
}


//ou chamar vários then para executar uma função atras da outra 
promessa
    .then(primeiroElemento)
  //.then(primeiro => console.log(primeiro)) //resultado da primeira chamada
    .then(primeiro => primeiro[0]) //primeira letra
    .then(letra => letra.toLowerCase()) //transformar em minuscula
    .then(minusculo => console.log(minusculo))