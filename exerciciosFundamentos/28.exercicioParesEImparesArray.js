/*
28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares
*/


let numero = ['1', '2', '3', '4' ,'5' , '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']
//let numero = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let quantidadeDePares = 0;
let quantidadeDeImpares = 0;

for( indice =0; indice < numero.length; indice++){
    if( (numero[indice] % 2 ) == 0){
        quantidadeDePares++
    } else {
        quantidadeDeImpares++
    }
}
console.log(`${quantidadeDePares} números pares e ${quantidadeDeImpares} números impares`)


// function paresEImpares(listaDeNumeros){
//     let qtdPares = 0;
//     let qtdImpares = 0;
//     for(let i = 0; i < listaDeNumeros.length; i++){
//         if(listaDeNumeros[i] % 2 == 0){
//             qtdPares++
//         } else {
//             qtdImpares++
//         }
//     }
//     console.log(quantidadeDePares, quantidadeDeImpares)
// }

// vetor = [1,2,3,4,5,6,7,8,9,10]
// paresEImpares(vetor)


