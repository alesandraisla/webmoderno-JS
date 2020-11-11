/*
32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
*/

function calcularMediaAritmetica(valoresDoVetor){
    let total = 0;
    for(let i = 0; i < valoresDoVetor.length; i++){
        total += valoresDoVetor[i]
    }
    return total/valoresDoVetor.length;
}

valoresDoVetor= [5, 10, 11];
console.log(calcularMediaAritmetica(valoresDoVetor))