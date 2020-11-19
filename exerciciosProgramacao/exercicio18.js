/*
Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo
usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
indeterminada de números e retorne a média simples desses números.
*/

function mediaDoArray (...numero){

    let soma = 0;
    let media = 0;

    for(let i = 0; i < numero.length; i++){
        soma += numero[i];
        media = soma / numero.length;
    }
    return media;
}

console.log(mediaDoArray(2,4,5,3) == 3.5) // 3.5
console.log(mediaDoArray(2,4,5,3)) // 3.5
console.log(mediaDoArray(1, 2, 3, 4,5)== 3) // 3
console.log(mediaDoArray(1, 2, 3, 4,5)) // 3
console.log(mediaDoArray(0, 10) == 5) // 5
console.log(mediaDoArray(0, 10)) // 5

