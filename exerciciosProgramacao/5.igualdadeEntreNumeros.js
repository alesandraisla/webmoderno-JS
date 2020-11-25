/*
Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
*/


function maiorOuigual(primeiro, segundo){
    if(typeof primeiro != typeof segundo) return false

    return primeiro >=  segundo
}

console.log(maiorOuigual(5,1))
console.log(maiorOuigual(0,0))
console.log(maiorOuigual(0 , "0"))