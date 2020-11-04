/*
13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

*/

function diadasemana (dia){

    switch(dia){
        case 1:
        case 7:
            console.log(`O dia ${dia} é fim de semana.`);
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log(`O dia ${dia} é dia útil`);
            break;
        default:
            console.log('Número inválido para o mês de novembro')
    
    }
    return ('---------------------------------------');
}

console.log(diadasemana(1))
console.log(diadasemana(7))
console.log(diadasemana(4))
console.log(diadasemana(32))