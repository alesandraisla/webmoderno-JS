/*
20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/
const _ = require('lodash');

function informarNotas (valor){

    let contadorNotasDeCem = 0;
    let contadorNotasDeCinquenta = 0;
    let contadorNotasDeDez = 0;
    let contadorNotasDeCinco = 0;
    let contadorNotasDeUm = 0;

    let falta = valor;

    while(falta > 0){
        if(falta >= 100){
            falta -= 100;
            contadorNotasDeCem++;
        } else if(falta >= 50){
            falta -= 50;
            contadorNotasDeCinquenta++;
        } else if(falta >= 10){
            falta -= 10;
            contadorNotasDeDez++;
        } else if (falta >= 5){
            falta -= 5;
            contadorNotasDeCinco++;
        } else if (falta >= 1){
            falta -= 1;
            contadorNotasDeUm++;
        } 
    }    

    return {    
        100: contadorNotasDeCem,
        50: contadorNotasDeCinquenta,
        10: contadorNotasDeDez,
        5: contadorNotasDeCinco,
        1: contadorNotasDeUm,
    }
    //return `${contadorNotasDeCem} nota(s) de R$ 100, ${contadorNotasDeCinquenta} nota(s) de R$ 50, ${contadorNotasDeDez} nota(s) de R$ 10, ${contadorNotasDeCinco} nota(s) de R$ 5, ${contadorNotasDeUm} nota(s) de R$ 1. `
}

 console.log(_.isEqual(informarNotas(18),  { '1': 3, '5': 1, '10': 1, '50': 0, '100': 0 }))
 console.log(_.isEqual(informarNotas(220), { '1': 0, '5': 0, '10': 2, '50': 0, '100': 2 }))
 console.log(_.isEqual(informarNotas(13),  { '1': 3, '5': 0, '10': 1, '50': 0, '100': 0 }))
 console.log(_.isEqual(informarNotas(0),   { '1': 0, '5': 0, '10': 0, '50': 0, '100': 0 }))
 console.log(_.isEqual(informarNotas(5),   { '1': 0, '5': 1, '10': 0, '50': 0, '100': 0 }))
 console.log(!_.isEqual(informarNotas(5),   { '1': 5, '5': 0, '10': 0, '50': 0, '100': 0 }))
 console.log(!_.isEqual(informarNotas(200), { '1': 5, '5': 0, '10': 0, '50': 0, '100': 3 }))
 console.log((informarNotas(153)))

 /*
 function sacarDinheiro(valorSaque) {
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    let valorNota = calcularValorNota(valorSaque)
    while (valorSaque >= valorNota) {
        switch (valorNota) {
            case 100:
                valorSaque -= 100
                contador100++
                break
            case 50:
                valorSaque -= 50
                contador50++
                break
            case 10:
                valorSaque -= 10
                contador10++
                break
            case 5:
                valorSaque -= 5
                contador5++
                break
            case 1:
                contador1++
                valorSaque -= 1
                break
        }

        valorNota = calcularValorNota(valorSaque)

    }
    return elaborarResultado(contador100, contador50, contador10, contador5, contador1)
}

function calcularValorNota(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}

function elaborarResultado(contador100, contador50, contador10, contador5, contador1) {
    let resultado = ''

    if (contador100 > 0) {
        resultado += `${contador100} nota(s) de R$ 100. `
    }

    if (contador50 > 0) {
        resultado += `${contador50} nota(s) de R$ 50. `
    }

    if (contador10 > 0) {
        resultado += `${contador10} nota(s) de R$ 10. `
    }

    if (contador5 > 0) {
        resultado += `${contador5} nota(s) de R$ 5. `
    }

    if (contador1 > 0) {
        resultado += `${contador1} nota(s) de R$ 1. `
    }

    return resultado
}

console.log(sacarDinheiro(153));



 */