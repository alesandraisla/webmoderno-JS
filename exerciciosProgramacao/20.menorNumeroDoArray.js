/*
Criar uma função que receba um array de números e retorne o menor número desse array
*/

// function menorNumero (...grupoDeNumeros){
//     return Math.min(...grupoDeNumeros);
// }

// console.log([menorNumero(10, 5, 35, 65)])
// console.log([menorNumero(5, -15, 50, 3)])



function menorNumero (grupoDeNumeros){
    return Math.min.apply(Math, grupoDeNumeros)
}

console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))
