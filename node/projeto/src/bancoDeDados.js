//Objeto interno que não está vísivel fora desse arquivo
const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

function salvarProduto(produto) {
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto;
}

//Pegar o produto por id
function getProduto(id) {
    return produtos[id] || {}
}

//Retornar todos os valores dentro do objeto produtos 
function getProdutos() {
    return Object.values(produtos)
}

//excluir produto
function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto;

}


module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto } //Estará visível no servidor 
