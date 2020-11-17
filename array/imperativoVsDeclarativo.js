const alunos = [
    { nome: 'Lara', nota: 7.9},
    { nome: 'Yuna', nota: 9.2}
]

//Imperativo -> passo a passo de como deve ser, descrevendo como <<<como>>>

let total1 = 0;
for (let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota;
}
console.log(total1 / alunos.length)


//Declarativo -> Se importa mais com o que tem que ser feito <<<o que>>>

//métodos reusáveis
const getNota = aluno => aluno.nota;
const soma = (total, atual) => total + atual;
//solução
//mapeie e agregue
const total2 = alunos.map(getNota).reduce(soma);
console.log(total2 / alunos.length)


//select codigo, nome, email from clientes where ativo = 1 <<<< o que>>>>> SQL linguagem declarativa