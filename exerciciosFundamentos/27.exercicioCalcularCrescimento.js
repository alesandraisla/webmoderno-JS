/*
27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

function diferencaEntreCriancas (crianca1, crianca2){

    let contadorDeAnos = 0;
    let criancaMenor = null;
    let criancaMaior = null;

    if(crianca1.altura == crianca2.altura || crianca1.taxaDeCrescimento == crianca2.taxaDeCrescimento){
        return null;
    }

    if(crianca1.altura < crianca2.altura){
        criancaMenor = crianca1;
        criancaMaior = crianca2;
    } else if (crianca2.altura < crianca1.altura) {
        criancaMenor = crianca2;
        criancaMaior = crianca1;
    } 
       

    while(criancaMenor.altura < criancaMaior.altura ){
        criancaMenor.altura += criancaMenor.taxaDeCrescimento;
        criancaMaior.altura += criancaMaior.taxaDeCrescimento;
        contadorDeAnos++;
        console.log(criancaMenor, criancaMaior)
        if(contadorDeAnos > 1000){
            break;
        }
    }

    console.log(criancaMaior, criancaMenor, contadorDeAnos)

    return {
        crianca: criancaMenor,
        anos: contadorDeAnos
    }
}

let crianca1 = {
    altura: 40,
    taxaDeCrescimento: 1
}

let crianca2 = {
    altura: 60,
    taxaDeCrescimento: 0.5
}

diferencaEntreCriancas(crianca1, crianca2)


// function calcularCrescimento(altura1, taxa1, altura2, taxa2) {
//     if(altura1 == altura2){
//         if (taxa1 > taxa2) {
//             return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
//         } else if(taxa1 < taxa2) {
//             return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
//         }else{
//             return 'As crianças tem igual altura e crescimento.'
//         }
//     } else {
//         if (altura1 > altura2) {
//             if(taxa1 >= taxa2){
//                 return 'A criança menor não ultrapassará a maior.'
//             }else{
//                return calcularTempo(altura2, taxa2, altura1, taxa1) 
//             }
//         } else {
//             if(taxa2 >= taxa1){
//                 return 'A criança menor não ultrapassará a maior.'
//             }else{
//                return calcularTempo(altura1, taxa1, altura2, taxa2) 
//             }
//         }
//     }
// }

// function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){
//     let qtdAnos = 0
//     while (alturaMenor < alturaMaior) {
//         alturaMenor += taxaAlturaMenor
//         alturaMaior += taxaAlturaMaior
//         qtdAnos++
//     }
//     console.log(qtdAnos)
//     return qtdAnos
// }

// console.log(calcularCrescimento(150, 2, 130, 4));