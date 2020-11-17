/*reduce -> função transforma um array em um unico elemento / outro array/ string 
acumulador
1° elemento é acumulador 
2° elemento atual indice 
*/
const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome:'Ana', nota: 9.2, bolsista: true},
    {nome: 'Leandro', nota: 9.8, bolsita: false},
    {nome: 'Maria', nota: 8.7, bolsista: true}
]

//extrair apenas a nota
console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)//valor inicial ou não passar []

console.log(resultado)