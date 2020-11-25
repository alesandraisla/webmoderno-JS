/*
Criar uma função que receba um array de números e retorne o menor número desse array
*/



//Math.min com destructuring =====================================================


function menorNumero(grupoDeNumeros) {
    return Math.min(...grupoDeNumeros);
}

console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))

//Usando apply ===========================================================

// function menorNumero(grupoDeNumeros) {
//     return Math.min.apply(Math, grupoDeNumeros)
// }

// console.log(menorNumero([10, 5, 35, 65]))
// console.log(menorNumero([5, -15, 50, 3]))

//Usando forIN e IF =======================================================

// function menorNumero(numeros) {
//     let menor = numeros[0]

//     for(let i in numeros)
//     if(numeros[i] < menor)
//     menor = numeros[i]

//     return menor;
// }

// console.log(menorNumero([10, 5, 35, 65]))
// console.log(menorNumero([5, -15, 50, 3]))

//REDUCE ========================================================================

// function menorNumero(numeros){
//     return numeros.reduce((anterior, atual) => anterior < atual ? anterior : atual )
// }


// console.log(menorNumero([10, 5, 35, 65]))
// console.log(menorNumero([5, -15, 50, 3]))


