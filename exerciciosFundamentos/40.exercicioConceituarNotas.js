/*
40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.
*/

function conceituarNotas(notasAlunos){
    let conceitos = []
    for(let indice = 0; indice < notasAlunos.length; indice++){
        if(notasAlunos[indice] >= 0 && notasAlunos[indice] <= 4.9){
            conceitos.push('D')
        } else if (notasAlunos[indice] >= 5.0 && notasAlunos[indice] <=6.9){
            conceitos.push('C')
        } else if (notasAlunos[indice] >= 7.0 && notasAlunos[indice] <= 8.9){
            conceitos.push('B')
        } else if (notasAlunos[indice] >=9.0 && notasAlunos[indice] <= 10.0){
            conceitos.push('A')
        } else {
            conceitos.push('Nota inválida')
        }
    }
    return conceitos;
}

let notasAlunos = [ 10, 13, 9, 8.2, 2.5, 7.7, 6.8]
let vetorConceitos = conceituarNotas(notasAlunos)

console.log(vetorConceitos)
//console.log(conceituarNotas(notasAlunos))