/*
36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
*/

// function retornoDeOutroVetor (vetorNumerico, numeroInteiro){
//     let vetor = []
//     let resultado = 0;
//     for(let i = 0; i < vetorNumerico.length; i++){
//         resultado = 3 * vetorNumerico[i];
//         console.log(`resultado numero inteiro ${resultado}`);
//     }
//    return numeroInteiro = vetor.push(resultado);
// }

vetorNumerico = [2,4,6]
// console.log(retornoDeOutroVetor(vetorNumerico));


function multiplicarVetor(vetorNumerico, multiplicador){
    let vetorResultado = []
    vetorNumerico.forEach(elemento => {
        vetorResultado.push(elemento * multiplicador)
    });
    return vetorResultado;
}

console.log(multiplicarVetor(vetorNumerico, 3))