const porta = 3003

const express = require('express')
const app = express() //atribuindo o resultado 
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

//urlencoded formado passado no body do postman
app.use(bodyParser.urlencoded({ extended: true }))

//função send envia uma resposta convertendo para JSON

// app.get('/produtos', (requisicao, resposta, next) => {
//     console.log('Middleware 1...')
//     next()
// })


app.get('/produtos', (requisicao, resposta, next) => {
    resposta.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (requisicao, resposta, next) => {
    resposta.send(bancoDeDados.getProduto(requisicao.params.id))
})

//salvar produto
app.post('/produtos', (requisicao, resposta, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: requisicao.body.nome,
        preco: requisicao.body.preco
    })
    resposta.send(produto) //gerar JSON
})

//Implementar o alterar um registro que já existe (put)
app.put('/produtos/:id', (requisicao, resposta, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: requisicao.params.id,
        nome: requisicao.body.nome,
        preco: requisicao.body.preco
    })
    resposta.send(produto) //JSON
})

//deletar um registro 
app.delete('/produtos/:id', (requisicao, resposta, next) => {
    const produto = bancoDeDados.excluirProduto(requisicao.params.id)
    resposta.send(produto) // JSON
})



// app.use('/produtos', (requisicao, resposta, next) =>{
//     resposta.send({nome: 'Notebook', preco: 123.45}) 
// })

// //caso queira alterar no Postman para post
// app.post('/produtos', (requisicao, resposta, next) =>{
//     resposta.send({nome: 'Notebook', preco: 123.45}) 
// })


// //use será atendido para todas requisições do ->> http://localhost:3003/passarqualquercoisa
// app.use((requisicao, resposta, next) =>{
//     resposta.send({nome: 'Notebook', preco: 123.45}) 
// })

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})