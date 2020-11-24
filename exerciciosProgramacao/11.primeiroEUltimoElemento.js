/*
Crie uma função que receba uma array e retorne o
 primeiro e o ultimo elemento desse array como um novo array:
*/

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
