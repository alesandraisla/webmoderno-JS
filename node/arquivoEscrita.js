const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

//Persistir um arquivo 
//conversão do objeto para formato textual para gerar um arquivo , ele criará um novo arquivo
fs.writeFile(__dirname + '/arquiGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo')
})