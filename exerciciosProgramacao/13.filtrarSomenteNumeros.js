/*
Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.
*/

function somenteNumero (listaDeArray){
    return typeof listaDeArray == "number";
}

let filtrarNumero1 = ["Javascript", 1, "3", "Web", 20].filter(somenteNumero);
let filtrarNumero2 = ["a", "c"].filter(somenteNumero);

console.log(filtrarNumero1, filtrarNumero2)

