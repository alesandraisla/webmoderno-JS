const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}


//conversão do objeto para formato textual
fs.writeFile(__dirname + '/aruivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo saldo')
})