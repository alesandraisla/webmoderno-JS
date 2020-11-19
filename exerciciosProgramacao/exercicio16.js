/*
A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos
bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais.
Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100,
exceto se for também múltiplo de 400.
Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele
é bissexto ou não.
*/


function anobissexto(ano){
    if(ano <= 0){
        return `${ano} Não é bissexto`
    } 
    else if ((ano % 400) == 0 || (ano % 4) == 0 && (ano % 100) != 0){
        return `${ano} É bissexto`
    } else {
        return `${ano} Não é bissexto`
    }
}

console.log(anobissexto(0)) // falso
console.log(anobissexto(4))  // verdadeiro
console.log(anobissexto(100)) // falso
console.log(anobissexto(400))  // verdadeiro
console.log(anobissexto(800))  // verdadeiro
console.log(anobissexto(2021)) // falso