const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50 }'
]
/*
Retornar um array apenas com os preços
*/

let converterParaObjeto = json => JSON.parse(json)

// function converterParaObjeto(json){
//     return JSON.parse(json)
// }

//let apenasPreco = produto => produto.preco;

function apenasPreco(produto){
    return produto.preco;
}

let resultado = carrinho.map(converterParaObjeto).map(apenasPreco)

console.log(resultado)
