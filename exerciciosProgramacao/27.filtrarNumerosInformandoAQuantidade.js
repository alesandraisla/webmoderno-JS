/*
Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro.
*/


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