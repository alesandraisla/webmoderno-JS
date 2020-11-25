/*
Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.

*/

//Usando repeat =============================================

function quantidadeDeNumeroNaString(numero){

    return("+".repeat(numero))
}

console.log(quantidadeDeNumeroNaString(2))
console.log(quantidadeDeNumeroNaString(4))



//Usando for ==============================================

// function simboloMais(quantidade) {
//     let resultado = ''

//     for(let i =0; i < quantidade; i++) {
//         resultado += '+'
//     }

//     return resultado;
// }

// console.log(simboloMais(2))
// console.log(simboloMais(4))



//Usando fill e join ==============================================


// function simboloMais(quantidade) {

//         return Array(quantidade).fill('+').join('');
// }

// console.log(simboloMais(2))
// console.log(simboloMais(4))