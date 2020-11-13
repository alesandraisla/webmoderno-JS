// Object.preventExtensios
//nao permite que o objeto seja extensivo, ou seja, adicionar novos objetos 

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log(produto);
console.log('Extensível:', Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Borracha escola branca';  //Não será adicionado pois utilizou o preventExtensions
delete produto.tag
console.log(produto)

//Object.seal
//selar não consegue add novos atributos, nem exclui, mas consegue modificar os valores dos atributos do objeto
const pessoa = { nome: 'Vanessa', idade: 35}

Object.seal(pessoa)
console.log(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome;
pessoa.idade = 20;
console.log(pessoa)
