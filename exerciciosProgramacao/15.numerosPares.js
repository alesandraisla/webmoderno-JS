/*
Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.
*/

function soNumerosPares (conjuntoDeNumeros){
   
    let novo = []
  console.log(conjuntoDeNumeros)
    for(let i =0; i <= conjuntoDeNumeros.length; i++){
        if(conjuntoDeNumeros[i] % 2 == 0){
            novo.push(conjuntoDeNumeros[i])
        }
    }
    return novo;
}

console.log(soNumerosPares([10, 70, 22, 43]))
console.log(soNumerosPares([1, 2, 3, 4]))





