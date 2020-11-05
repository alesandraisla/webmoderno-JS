/*
22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido
*/

function calculoDeAnuidade (mes, valor){

    let taxaDeJuros = 0.05;

    if (mes >= 1 || mes <=12){
        return valor * Math.pow(1 + taxaDeJuros, mes);
    } else {
        `Favor informar o mês correto`;
    }

}

console.log(calculoDeAnuidade(1,2000).toFixed(2))
console.log(calculoDeAnuidade(2,2000).toFixed(2))
console.log(calculoDeAnuidade(3,2000).toFixed(2))
console.log(calculoDeAnuidade(4,2000).toFixed(2))
console.log(calculoDeAnuidade(5,2000).toFixed(2))
console.log(calculoDeAnuidade(6,2000).toFixed(2))
console.log(calculoDeAnuidade(7,2000).toFixed(2))
console.log(calculoDeAnuidade(8,2000).toFixed(2))
console.log(calculoDeAnuidade(9,2000).toFixed(2))
console.log(calculoDeAnuidade(10,2000).toFixed(2))
console.log(calculoDeAnuidade(11,2000).toFixed(2))
console.log(calculoDeAnuidade(12,2000).toFixed(2))
