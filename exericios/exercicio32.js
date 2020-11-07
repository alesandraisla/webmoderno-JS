/*
32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
*/

function calcularMediaAritmetica(){

    let valoresDoVetor = [5, 10, 11];
    let total = 0;

    for(i = 0; i < valoresDoVetor.length; i++){
        total += valoresDoVetor[i];
    }
    return total;

}

console.log(calcularMediaAritmetica())