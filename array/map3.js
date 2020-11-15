//Implementar o map

Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}


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

let apenasPreco = produto => produto.preco;

// function apenasPreco(produto){
//     return produto.preco;
// }

let resultado = carrinho.map2(converterParaObjeto).map2(apenasPreco)

console.log(resultado)
