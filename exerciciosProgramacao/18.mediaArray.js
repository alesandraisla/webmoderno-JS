/*
Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo
usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
indeterminada de números e retorne a média simples desses números.
*/

function mediaDeInvestimento (valoresInvestidos){
    let somaDoInvestimento = 0;
    let mediaDoInvestimento = 0;

    for(let i = 0; i < valoresInvestidos.length; i++){
        somaDoInvestimento += valoresInvestidos[i];
        mediaDoInvestimento = somaDoInvestimento / valoresInvestidos.length;
    }
    return mediaDoInvestimento;
}

console.log(mediaDeInvestimento([2,4,5,3]) == 3.5) // 3.5
console.log(mediaDeInvestimento([2,4,5,3])) // 3.5
console.log(mediaDeInvestimento([1, 2, 3, 4,5])== 3) // 3
console.log(mediaDeInvestimento([1, 2, 3, 4,5])) // 3
console.log(mediaDeInvestimento([0, 10]) == 5) // 5
console.log(mediaDeInvestimento([0, 10])) // 5

