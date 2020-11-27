const fs = require('fs')

const caminho = __dirname + '/arquivo.json'
console.log(__dirname)//diretorio

//ler de forma sincrona...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//leitura assincrona (mais interessante) passa callback
fs.readFile(caminho, 'utf-8', (erro, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

//retornando um objeto (executa antes da leitura assincrona)
const config = require('./arquivo.json')
console.log(config.db)



// //traz callback
fs.readdir(__dirname, (erro, arquivos)=> {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})