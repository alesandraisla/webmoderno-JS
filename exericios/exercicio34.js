/*
34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/

function verdadeiraOuFalsa (palavra1, palavra2){


    if ( palavra1 == palavra2){
        return true;
    } else {
        return false;
    }

   
}

console.log(verdadeiraOuFalsa('azul', 'rosa'));
console.log(verdadeiraOuFalsa(1, 5));
console.log(verdadeiraOuFalsa('gato', 'gato'));
console.log(verdadeiraOuFalsa('gato', 'GATO'));