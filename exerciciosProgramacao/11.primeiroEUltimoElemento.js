/*
Crie uma função que receba uma array e retorne o
 primeiro e o ultimo elemento desse array como um novo array:
*/


//Usando destructuring e push ========================================

function receberPrimeiroEUltimoElemento (...listaDeElementos){

    let primeiroElemento = listaDeElementos [0];
    let ultimoElemento = listaDeElementos [listaDeElementos.length - 1]
    let novaListaDeElementos = []
    novaListaDeElementos.push(primeiroElemento), novaListaDeElementos.push(ultimoElemento);

    return novaListaDeElementos;
}

console.log(receberPrimeiroEUltimoElemento(2,5,6,4,3))
console.log(receberPrimeiroEUltimoElemento(7, 14, "Olá"))
console.log(receberPrimeiroEUltimoElemento(-100, "aplicativo", 16))



//Apenas Array ===================================================

// function receberPrimeiroEUltimoElemento(elementos) {
//     const indiceDoPrimeiroElemento = 0;
//     const indiceDoUltimoElemento = elementos.length -1;
//     const primeiroElemento = elementos[indiceDoPrimeiroElemento]
//     const ultimoElemento = elementos[indiceDoUltimoElemento]

//     return [primeiroElemento, ultimoElemento]
// }

// console.log(receberPrimeiroEUltimoElemento([2,5,6,4,3]))
// console.log(receberPrimeiroEUltimoElemento([7, 14, "Olá"]))
// console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]))



//Usando shift e pop ======================================

// function receberPrimeiroEUltimoElemento(elementos) {
//     const primeiroElemento = elementos.shift()
//     const ultimoElemento = elementos.pop()

//     return [primeiroElemento, ultimoElemento]
// }


// console.log(receberPrimeiroEUltimoElemento([7, 14, "Olá"]))
// console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]))



//Usando pop e destructuring ===================================================

// function receberPrimeiroEUltimoElemento([primeiroElemento, ...elementosRestantes]) {
//     const ultimoElemento = elementosRestantes.pop()

//     return [primeiroElemento, ultimoElemento]
// }



// console.log(receberPrimeiroEUltimoElemento([7, 14, "Olá"]))
// console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]))