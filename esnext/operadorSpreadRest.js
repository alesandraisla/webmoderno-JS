//operador ... rest(juntar)/spread(espalhar)
//usar rest com parâmetro de função


//usar spread com objeto
const funcionario = { nome: 'Yuna', salario: 3543.99}
const clone = { ativo: true, ...funcionario }
console.log(clone)

//usar spread com array
const grupoA = ['Tidus', 'Cloud', 'Serah']
const grupoFinal = ['Lara', ...grupoA, 'Lulu']
console.log(grupoFinal)