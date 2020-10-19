//não atribui nada  (não foi inicializada -> undefined)
//valor primitivo utilizado quando uma variável não teve valor atribuído
let valor;
console.log(valor);


// Ausência de valor (definido -> null) padrão
//valor primitivo que representa a ausência intencional de um valor de objeto

valor = null;
console.log(valor);
console.log(typeof valor);
//console.log(valor.toString()// Se tentar acessar algo null dará ERRO)

const produto = {}
console.log(produto.preco); //undefined

produto.preco = 3.50;
console.log(produto);
console.log(!!produto.preco);

produto.preco = null //Sem preço 
