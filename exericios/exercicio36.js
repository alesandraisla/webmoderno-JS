/*
36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
*/

function retornoDeOutroVetor (vetorNumerico, numeroInteiro){

    vetorNumerico = [2,4,6]
    let vetor = []
    
    

    for(let i = 0; i < vetorNumerico.length; i++){
        let resultado = 2 * vetorNumerico[i];
        console.log(`resultado numero inteiro ${resultado}`);
       // console.log(numeroInteiro.push(resultado))
    }

    //  console.log(numeroInteiro.push(resultado));
    numeroInteiro = vetor.push(resultado)
   return numeroInteiro;
}

console.log(retornoDeOutroVetor());