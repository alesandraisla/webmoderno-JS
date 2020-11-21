/*
Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro.
*/

function filtrarPorQuantidadeDeDigitos(grupoDenumeros, quantidadeDeDigitos){
    let quantidadeDeDigito= 2;

    // let arrayFitrado = grupoDenumeros.filter(n => n <= quantidadeDeDigitos.length);
    let novaLista = grupoDenumeros.map(item => item.length == quantidadeDeDigito.length);
    console.log(novaLista)
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))