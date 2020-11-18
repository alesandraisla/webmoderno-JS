/*
Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) 
e realize a multiplicação deles. Porém, não utilize o operador de mutiplicação.
*/

function multiplicarSemOperador (numero1, numero2){

    let resultado = 0;    

    if(numero1 <= 0 || numero2 <= 0){
        return `Retornará ${resultado = 0}`;
    }
    for(let i = 1; i <= numero2; i++){
        resultado += numero2;
        numero1++
    }
    return `Retornará ${resultado}`;
}

console.log(multiplicarSemOperador(2,2))
console.log(multiplicarSemOperador(5,5))
console.log(multiplicarSemOperador(0,7))