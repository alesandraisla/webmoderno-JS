/*
Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) 
e realize a multiplicação deles. Porém, não utilize o operador de mutiplicação.
*/

//======== Usando o for ===========================

function multiplicarSemOperador (numero1, numero2) {

    let resultado = 0;    
   
    for(let i = 1; i <= numero2; i++) {
         resultado += numero1;
    }

    return resultado;
}

console.log(multiplicarSemOperador(2,2))
console.log(multiplicarSemOperador(5,5))
console.log(multiplicarSemOperador(0,7))

//======== Usando operador identico ===========================

// function multiplicar(numero, multiplicador){
//     if(numero === 0 || multiplicador === 0) {
//         return 0;
//     }

//     return multiplicador == 1 ? numero : numero + multiplicar(numero, multiplicador -1)
// }

// console.log(multiplicar(5,5))
// console.log(multiplicar(0,7))



/*======== nessa versão, garantimos que o multiplicador será o menor número, 
portanto haverá o mínimo de chamadas recursivas===========================
*/

// function multiplicar(numeroA, numeroB) {
//     if(numeroA === 0 || numeroB === 0) return 0
   

//     const maiorNumero = Math.max(numeroA, numeroB);
//     const menorNumero = Math.min(numeroA, numeroB);

//     function multiplicarRecursivamente(numero, multiplicador) {
//         return(
//             multiplicador === 1?
//             numero : numero + multiplicarRecursivamente(numero, multiplicador - 1)

//         )
//     }
//     return multiplicarRecursivamente(maiorNumero, menorNumero)
// }

// console.log(multiplicar(5, 5))
// console.log(multiplicar(0, 7))