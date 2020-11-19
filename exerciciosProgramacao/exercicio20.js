/*
Criar uma função que receba um array de números e retorne o menor número desse array
*/

function menorNumero (...numeros){
    return Math.min(...numeros);

}

// function menorNumero (...numeros){
//     return Math.min.apply(Math, numeros);
// }


console.log([menorNumero(5, -15, 50, 3)])
console.log([menorNumero(10, 5, 35, 65)])