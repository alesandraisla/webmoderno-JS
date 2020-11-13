//Não muda a referência da memória 
// pessoa -> 123 -> {...}
const pessoa = {nome: 'Lara'}
console.log(pessoa);
pessoa.nome = 'Yuna';
console.log(pessoa)

//nao pode atribuir um novo objeto para uma constante
//pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'}

//congelar um objeto pessoa
//n conseue mexer mais no objeto (alterar, adicionar, excluir)
Object.freeze(pessoa)
pessoa.nome = 'Tidus'
console.log(pessoa)


//Nem a referência e objeto que foi criado pode ser mudado
const pessoaConstante = Object.freeze({nome: 'Vanessa'})
pessoaConstante.nome = 'Beatriz'
console.log(pessoaConstante)
