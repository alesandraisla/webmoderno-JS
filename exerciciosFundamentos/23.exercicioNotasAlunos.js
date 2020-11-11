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
        codigoAluno: codigoAluno,
        resultado: Math.round(resultado * 100)/100,
    }
}


function apresentar(codigoAluno, ...notas){
    let resultado = notaDoAluno(codigoAluno, ...notas);
      if(resultado >= '8.00'){
        console.log (resultado, 'notas', ...notas, 'Aprovado')
    }  else{
        console.log(resultado,'notas', ...notas, 'Reprovado')
    }
}

apresentar('000002', 8, 9, 2);
apresentar('123', 2.8, 6, 3.5)
apresentar('123', 2.8, 3.2, 3.5)
apresentar('123', 1.5, 3.2, 1.2)
// console.log(apresentar())


 console.log(notaDoAluno('000002', 8, 9, 2).resultado == 8.43)
 console.log(notaDoAluno('000003', 0, 0, 0).resultado == 0)
console.log(notaDoAluno('000004', 10, 10, 10).resultado == 14.29)
console.log(notaDoAluno('000005', 25, 100, 100).resultado == 100)


/*
function calcularNotaFinal(codAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calcularNotaFinal(123, 2.8, 6, 3.5)


*/