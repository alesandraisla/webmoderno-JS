/*
34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/

// function StringVerdadeiraOuFalsa (palavra1, palavra2){

//     if ( palavra1 == palavra2){
//         return true;
//     } else {
//         return false;
//     }
  
// }

// console.log(StringVerdadeiraOuFalsa('azul', 'rosa'));
// console.log(StringVerdadeiraOuFalsa(1, 5));
// console.log(StringVerdadeiraOuFalsa('gato', 'gato'));
// console.log(StringVerdadeiraOuFalsa('gato', 'GATO'));
// console.log(StringVerdadeiraOuFalsa('abc', 'cba'));

function verificarStrings(string1, string2){
    let estaContido = true;
    for(let indice = 0; indice < string1.length; indice++){
        let caractereString1 = string1.charAt(indice).toLowerCase()
        for(let lista = 0; lista < string2.length; lista++){
            let caractereString2 = string2.charAt(lista).toLowerCase()
            if(caractereString1 == caractereString2){
                estaContido = true;
                break;
            } else {
                estaContido = false;
            }
        }
        if(!estaContido){
            return estaContido
        }
    }
    return estaContido
}

console.log(verificarStrings('abc','cba'))
console.log(verificarStrings('azul','rosa'))
console.log(verificarStrings('gato','GATO'))
console.log(verificarStrings(1,5))