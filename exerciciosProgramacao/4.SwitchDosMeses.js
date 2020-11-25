/*
Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês
*/

//============= Usando switch ======================

// function receberNomeDoMes(numeroDoMes) {
//     switch(numeroDoMes) {
//         case 1: 
//             return "Janeiro";
//         case 2: 
//             return "Fevereiro";
//         case 3: 
//             return "Março";
//         case 4: 
//              return "Abril";
//         case 5: 
//             return "Maio";
//         case 6: 
//             return "Junho";
//         case 7: 
//             return "Julho";
//         case 8: 
//             return "Agosto";
//         case 9: 
//             return "Setembro";
//         case 10:
//              return "Outubro";
//         case 11:
//              return "Novembro";
//         case 12: 
//             return "Dezembro";
//         default:
//             return "Número inválido";                
//     }
// }

// console.log(receberNomeDoMes(1) == 'Janeiro'); // teste
// console.log(receberNomeDoMes(1));
// console.log(receberNomeDoMes(4) == 'Abril'); // teste
// console.log(receberNomeDoMes(4));

//============== Usando Array e reduzindo -- ==================

function receberNomeDoMes(numero) {
    const mapeamento = [
        'janeiro', 
        'fevereiro',
        'março', 
        'abril', 
        'maio', 
        'junho', 
        'julho', 
        'agosto', 
        'setembro', 
        'outubro', 
        'novembro', 
        'dezembro']

    return mapeamento [--numero];

}

console.log(receberNomeDoMes(1))
console.log(receberNomeDoMes(4))