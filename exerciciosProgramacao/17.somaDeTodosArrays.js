/*
Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
*/

//Usando foreach ==============================================


function somarNumeros(numeros) {
    let soma = 0
    numeros.forEach(numero => soma += numero)

    return soma;
}

console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))

//Usando reduce ======================================

// function somarNumeros(numeros) {
//     const soma = numeros.reduce( (acumulador, numeroAtual) => acumulador + numeroAtual, 0)

//     return soma;
// }

// console.log(somarNumeros([10, 10, 10]))
// console.log(somarNumeros([15, 15, 15, 15]))
