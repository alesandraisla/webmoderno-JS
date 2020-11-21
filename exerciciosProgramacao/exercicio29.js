/*
Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
*/

function receberMelhorEstudante (notasDosEstudantes){

    let mediaAluno1, somaAluno2, mediaAluno3  = 4;
    let somaAluno1, mediaAluno2, mediaAluno3  = 0;
    let resultadoAluno1, resultadoAluno2, resultadoAluno3 = 0;
      
    let estudante = notasDosEstudantes.joao.map(function(valor, indice, outro){
        somaAluno1 +=valor;
        resultadoAluno1= somaAluno1 / mediaAluno1
    })

    let estudante2 = notasDosEstudantes.mariana.map(function(valor, indice, outro){
        somaAluno2+=valor;
        resultadoAluno2 = somaAluno2 / mediaAluno2
    })

    let estudante3 = notasDosEstudantes.Carla.map(function(valor, indice, outro){
        somaAluno3 += valor;
        resultadoAluno3 = somaAluno3 / mediaAluno3
    })

    if(resultadoAluno1 > resultadoAluno2 && resultado1 > resultadoAluno3){
        return (`{ nome: "Joao", media ${resultadoAluno1} }`)
    } else if (resultadoAluno2 > resultadoAluno1 && resultadoAluno2 > resultadoAluno3){
        return  (`{ nome: "Mariana", media ${resultadoAluno2} }`)
    }
    return (`{ nome: "Carla", media ${resultadoAluno3} }`)
}

console.log(receberMelhorEstudante({joao: [8,7.6,8.9,6], mariana: [9, 6.6, 7.9, 8], Carla: [7, 7, 8, 9]}))



