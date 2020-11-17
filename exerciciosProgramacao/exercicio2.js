/*
Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
*/

function idadePessoa(idadeAnos){

    let anoAtual = 2020;
    let diasDoAno = 365;

    while(idadeAnos <= anoAtual){
        if(idadeAnos <= 0){
            return false;
        }    
        return (anoAtual - idadeAnos) * diasDoAno;
    }
}

console.log(idadePessoa(1991))
console.log(idadePessoa(1950))
console.log(idadePessoa(1995))
console.log(idadePessoa(-1))


// let idadeEmAno = ano => idade = `Idade de 1991 em anos, tem  ${(2020 - ano) * 365} em dias`;
// console.log(idadeEmAno(1991))

// let idadeEmAno2 = ano => idade = (2020 - ano) * 365;
// console.log(idadeEmAno2(1950))

// let idadeEmAno3 = ano => idade = (2020 - ano) * 365;
// console.log(idadeEmAno3(1995))
