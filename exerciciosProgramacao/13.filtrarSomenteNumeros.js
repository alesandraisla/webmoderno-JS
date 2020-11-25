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

//Usando for e push ================================================================

// function filtrarNumeros(array) {
//     const resultado = []

//     for(let item of array){
//         if(typeof item === "number")
//         resultado.push(item)
//     }
//     return resultado
// }

// console.log(filtrarNumeros(["Javascript", 1, "3", "web", 20]))
// console.log(filtrarNumeros(["a", "c"]))



//Usando filter e function arrow ===========================================================


// function filtrarNumeros(array) {
//     return array.filter(item => typeof item === "number")
// }

// console.log(filtrarNumeros(["Javascript", 1, "3", "web", 20]))
// console.log(filtrarNumeros(["a", "c"]))

