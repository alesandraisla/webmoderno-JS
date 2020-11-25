/*
Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.
*/


//Usando for e if ==================================================


function receberSomenteOsParesDeIndicesPares(conjuntoDeNumeros) {
   
   let resultado = []
  
    for(let i =0; i <= conjuntoDeNumeros.length; i += 2) {
        if(conjuntoDeNumeros[i] % 2 == 0){
            resultado.push(conjuntoDeNumeros[i])
        }
    }
    return resultado;
}

console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))
console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]))


//Usando filter =========================================================

// function receberSomenteOsParesDeIndicesPares(numeros) {
//     return numeros.filter((numero, indice) => {
//         const numeroPar = numero % 2 === 0
//         const indicePar = indice % 2 === 0

//         return numeroPar && indicePar;
//     })
// }


// console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))
// console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]))




