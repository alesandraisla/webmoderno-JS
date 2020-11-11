/*
31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
*/

function contagemDeNumerosNegativos (){
    let numerosInteiros = [-3, -5, -1 , 2, 15, 20, -4, -10, 8, 6, -11]
    let contagemNumeros = 0;
    for(i = 0; i < numerosInteiros.length; i++){
        if ( numerosInteiros[i] < 0){
            contagemNumeros++;
        }
    }
    return contagemNumeros;
}

console.log(contagemDeNumerosNegativos())

// function contagemNumerosNegativos(listaDeNumeros){
//     let contar = 0;
//     for(let i = 0; i < listaDeNumeros.length; i++){
//         if(listaDeNumeros[i] < 0){
//             contar++
//         }
//     }
//     return contar;
// }

// listaDeNumeros = [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]
// console.log(contagemNumerosNegativos(listaDeNumeros))