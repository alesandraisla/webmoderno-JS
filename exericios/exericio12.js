/*
12) Faça um algoritmo que calcule o fatorial de um número.
*/


function fatorialDeUmNumero (numero){


    let resultado = 1 ;

    for(let i = 1; i <= numero; i++){
    
        resultado *= i
    }
    return resultado;
}

console.log('Fatorial do numero 3 é:', fatorialDeUmNumero(3))
console.log('Fatorial do numero 4 é:', fatorialDeUmNumero(4))
console.log('Fatorial do numero 7 é:', fatorialDeUmNumero(7))
console.log('Fatorial do numero 10 é:', fatorialDeUmNumero(10))