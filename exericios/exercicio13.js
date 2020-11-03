/*
13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

*/

function diadasemana (dia){

    switch(dia){
        case 1:
            console.log(`O dia ${dia} é um fim de semana e é domingo`) ;
            break;
        case 2:
            console.log(`O dia ${dia} é dia útil e é segunda-feira`);
            break;
        case 3:
            console.log(`O dia ${dia} é dia útil e é terça-feira`);
            break;
        case 4:
            console.log(`O dia ${dia} é dia útil e é quarta-feira`);
            break;
        case 5:
            console.log(`O dia ${dia} é dia útil e é quinta-feira`);
            break;
        case 6:
            console.log(`O dia ${dia} é dia útil e é sexta-feira`);
            break;
        case 7:
            console.log(`O dia ${dia} é fim de semana e é sábado`);
            break;
        case 8:
            console.log(`O dia ${dia} é um fim de semana e é domingo`) ;
            break;
        case 9:
            console.log(`O dia ${dia} é dia útil e é segunda-feira`) ;
            break;
        case 10:
            console.log(`O dia ${dia} é dia útil e é terça-feira`) ;
            break;
        case 11:
            console.log(`O dia ${dia} é dia útil e é quarta-feira`) ;
            break;
        case 12:
            console.log(`O dia ${dia} é dia útil e é quinta-feira`) ;
            break;
        case 13:
            console.log(`O dia ${dia} é dia útil e é sexta-feira`) ;
            break;
        case 14:
            console.log(`O dia ${dia} é um fim de semana e é sábado`) ;
            break;
        case 15:  
            console.log(`O dia ${dia} é um fim de semana e é domingo`) ;
            break;
        case 16:
            console.log(`O dia ${dia} é dia útil e é segunda-feira`) ;
            break;
        case 17:
            console.log(`O dia ${dia} é dia útil e é terça-feira`) ;
            break;
        case 18:
            console.log(`O dia ${dia} é dia útil e é quarta-feira`) ;
            break;
        case 19:
            console.log(`O dia ${dia} é dia útil e é quinta-feira`) ;
            break;
        case 20:
            console.log(`O dia ${dia} é dia útil e é sexta-feira`) ;
            break;
        case 21:
            console.log(`O dia ${dia} é um fim de semana e é sábado`) ;
            break;
        case 22:
            console.log(`O dia ${dia} é um fim de semana e é domingo`) ;
            break;
        case 23:  
            console.log(`O dia ${dia} é dia útil e é segunda-feira`) ;
            break;
        case 24:  
            console.log(`O dia ${dia} é dia útil e é terça-feira`) ;
            break;
        case 25:  
            console.log(`O dia ${dia} é dia útil e é quarta-feira`) ;
            break;
        case 26:  
            console.log(`O dia ${dia} é dia útil e é quinta-feira`) ;
            break;
        case 27:  
            console.log(`O dia ${dia} é dia útil e é sexta-feira`) ;
            break;
        case 28:  
            console.log(`O dia ${dia} é um fim de semana e é sábado`) ;
            break;
        case 29:  
            console.log(`O dia ${dia} é um fim de semana e é domingo`) ;
            break;
        case 30:  
            console.log(`O dia ${dia} é dia útil e é segunda-feira`) ;
            break;
        default:
            console.log('Número inválido para o mês de novembro')

    
    }

    return ('---------------------------------------');
   
}

console.log(diadasemana(1))
console.log(diadasemana(7))
console.log(diadasemana(18))
console.log(diadasemana(32))