const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome:'Ana', nota: 9.2, bolsista: true},
    {nome: 'Leandro', nota: 9.8, bolsista: false},
    {nome: 'Maria', nota: 8.7, bolsista: true}
]

//desafio1: todos os alunos são bolsistas?
//retornar se é bolsista ou nao false ou verdadeiro

const todosBolsistas = (resultado, bolsista) => resultado && bolsista;

console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//desafio2: algum alguno é bolsita?

const algumBolsista = (resultado, bolsista) => resultado || bolsista;

console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))

console.log(alunos.map(a => a.bolsista)); // retorna um arrau 




