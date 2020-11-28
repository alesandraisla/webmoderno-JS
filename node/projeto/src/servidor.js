const porta = 3003

const express = require('express')
const app = express() //atribuindo o resultado 

//função send envia uma resposta convertendo para JSON

// app.get('/produtos', (requisicao, resposta, next) => {
//     console.log('Middleware 1...')
//     next()
// })

app.use((requisicao, resposta, next) =>{
    resposta.send({nome: 'Notebook', preco: 123.45}) 
})

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