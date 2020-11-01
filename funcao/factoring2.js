// Adicionando dados a função com objeto


function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('teclado', 350.99))
console.log(criarProduto('iphone', 6799.99))

