/*
13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

function diadasemana (numeroDoDia){

    switch(numeroDoDia){
        case 1:
        case 7:
            return (`O dia ${numeroDoDia} é fim de semana.`);
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return(`O dia ${numeroDoDia} é dia útil`);
        default:
            return('Número inválido.')
    }
}

console.log(diadasemana(1))
console.log(diadasemana(7))
console.log(diadasemana(4))
console.log(diadasemana(5))
console.log(diadasemana(6))
console.log(diadasemana(2))
console.log(diadasemana(32))