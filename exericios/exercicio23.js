/*
23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

function notaDoAluno (codigoAluno, ...notas){

    const pesoMaiorNota = 4;
    const pesoMenorNota = 3;
    let resultado = 0;
   
    // notas = notas.map((nota) => {
    //     return parseFloat(nota);
    // })
   
    notas = notas.sort((nota, outraNota) => {
        return nota - outraNota;
    }).reverse();

    let notasComPeso = (notas[2] * pesoMaiorNota) + (notas[0] * pesoMenorNota) + (notas[1] * pesoMenorNota)
    resultado = notasComPeso / (pesoMaiorNota + pesoMenorNota)
          
    return {
        codigo: codigoAluno,
        resultado: Math.round(resultado * 100)/100,
    }
}


function apresentar(codigoAluno, ...notas){

    let resultado = notaDoAluno(codigoAluno, ...notas);

    if(resultado >= '5.00'){
        console.log (resultado, 'notas', ...notas, 'Aprovado')
    } else {
        console.log(resultado, 'notas', ...notas, 'Reprovado')
    }
}

apresentar('000002', 8, 9, 2);
// console.log(apresentar())


// console.log(notaDoAluno('000002', 8, 9, 2).resultado == 8.43)
// console.log(notaDoAluno('000003', 0, 0, 0).resultado == 0)
// console.log(notaDoAluno('000004', 10, 10, 10).resultado == 14.29)
// console.log(notaDoAluno('000005', 25, 100, 100).resultado == 100)
