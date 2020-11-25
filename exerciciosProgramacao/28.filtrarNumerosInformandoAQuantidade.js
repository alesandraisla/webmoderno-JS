/*
Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro.
*/

//FOR ===========================================================================

function filtrarPorQuantidadedigitada(conjuntoDeNumeros, quantidadeDigitos){

    let novoConjuntoFiltrado = []
    let contador;
    let conversaoParaString = 0;

    for(let indice = 0; indice < conjuntoDeNumeros.length; indice++){

        conversaoParaString = conjuntoDeNumeros[indice].toString().length;

        if(conversaoParaString == quantidadeDigitos){
            novoConjuntoFiltrado.push(conjuntoDeNumeros[indice])
            contador++
        }
    }

    return novoConjuntoFiltrado;
}

console.log(filtrarPorQuantidadedigitada([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarPorQuantidadedigitada([5, 9, 1, 125, 11], 1))

//FOROF =============================================================================

// function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada) {
//     let resultado =[]

//     for(numero of numeros) {
//         const quantidadeDeDigitos = String(numero).length;

//         if(quantidadeDeDigitos === quantidadeDesejada){
//             resultado.push(numero)
//         }
//     }

//     return resultado;
// }

// console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))
// console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1))

//FILTER ======================================================================


// function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada) {
//     return numeros.filter(numero => {
//         const quantidadeDeDigitos = String(numero).length

//         return quantidadeDeDigitos === quantidadeDesejada
//     })
// }


// console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))
// console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1))