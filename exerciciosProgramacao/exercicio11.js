/*
Crie uma função que receba uma array e retorne o
 primeiro e o ultimo elemento desse array como um novo array:
*/

function receberPrimeiroEUltimoElemento (...elementoArray){
    let primeiroElemento = elementoArray [0];
  //  console.log(primeiro);

    let ultimoElemento = elementoArray [elementoArray.length - 1]
   // console.log(ultimo);

    let resultadoDoArray = []
    resultadoDoArray.push(primeiroElemento), resultadoDoArray.push(ultimoElemento);
    return resultadoDoArray;
}

console.log(receberPrimeiroEUltimoElemento(2,5,6,4,3))
console.log(receberPrimeiroEUltimoElemento(7, 14, "Olá"))
console.log(receberPrimeiroEUltimoElemento(-100, "aplicativo", 16))
