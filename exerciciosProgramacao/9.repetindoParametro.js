/*
Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
*/

// function repeticaoDeParametro (elementoARepetir, numeroDaRepeticao){

//     const conjunto = []
// //Usando for
// //    for(let indice = 1; indice <= numeroDaRepeticao; indice++){
// //        conjunto.push(elementoARepetir)
// //    }

//    while(numeroDaRepeticao > 0){
//        conjunto.push(elementoARepetir)
//        numeroDaRepeticao--;
//    }

//     return conjunto;
// }

// console.log(repeticaoDeParametro(7,3))
// console.log(repeticaoDeParametro("codigo",2))


// ==================Método fill =================


function repetir(item, quantidade) {
    return Array(quantidade).fill(item)
}

console.log(repetir(7,3))

console.log(repetir("codigo", 2))
