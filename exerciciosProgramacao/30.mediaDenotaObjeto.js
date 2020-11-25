/*
Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
*/

function melhoresEstudantes(alunos) {
    let resultado = {nome: null, media: 0}
    
    for (let nome in alunos) {
        let mediaDoAluno = calcularMediaDeAluno(alunos[nome])
       
        if(mediaDoAluno > resultado.media){
           resultado.media = mediaDoAluno;
           resultado.nome = nome;
        }
    }

    return resultado;
}

function calcularMediaDeAluno(listaDeNotas) {

    let soma = 0;
    
    for(const nota of listaDeNotas){
        soma += nota   
    }
    
    return  soma / listaDeNotas.length;;

}

// console.log(calcularMediaDeAluno([8, 7.6, 8.9, 6]))

 console.log(melhoresEstudantes({joao: [8, 7.6, 8.9, 6], mariana: [9, 6.6, 7.9, 8], Carla: [7, 7, 8, 9]}))

//Resolução =====================================================================

// const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)
// const media = array => soma(array) / array.length

// function recerberMelhorEstudante(estudantes) {
//     const estudantesComMedias = Object.entries(estudantes).map( estudante => {
//         const chave = 0,
//             valor = 1
//         return { nome: estudante[chave], media: media(estudante[valor]) }
//     })
//     const estudantesOrdenados = estudantesComMedias.sort( (estudanteA, estudanteB) => estudanteB.media - estudanteA.media )
//     const melhorEstudante = estudantesOrdenados[0]
//     return melhorEstudante
// }

// console.log(recerberMelhorEstudante({joao: [8, 7.6, 8.9, 6], mariana: [9, 6.6, 7.9, 8], Carla: [7, 7, 8, 9]}))
