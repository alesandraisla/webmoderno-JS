/*
Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
*/

function idadePessoa(idade){

    let anoQueNasceu = 2020 - idade;
    let anoAtual = 2020;
    let diasDoAno = 365;

    while(anoQueNasceu <= anoAtual){
        return (anoAtual - anoQueNasceu) * diasDoAno;
    }
    return false 
}

console.log(idadePessoa(25) == 9125)
console.log(idadePessoa(25))
console.log(idadePessoa(70) == 25550)
console.log(idadePessoa(70))
console.log(idadePessoa(-1)) // false
