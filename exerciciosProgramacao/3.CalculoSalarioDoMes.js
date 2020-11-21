/*
Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. 
O retorno da função deve ser a string "Salário igual a R$ X",
 em que X é o quanto o funcionário ganhou no mês.
*/

function salarioDoMes (horasTrabalhadas, salario){
    
    let salarioAtual = horasTrabalhadas * salario;
    return `Salário igual a R$ ${salarioAtual.toFixed(2)}`
}

//Function Arrow
// let salarioDoMes = (horasTrabalhadas, salario) => `Salário igual a R$ ${horasTrabalhadas * salario}`

console.log(salarioDoMes(150, 40.5))
