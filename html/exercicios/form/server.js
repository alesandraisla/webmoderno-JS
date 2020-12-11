//Para receber uma requisição a partir do form.html

const express = require('express')
const app = express()
const bodyParser = require('body-parser') //vai ter acesso a todos os dados

app.use(bodyParser.urlencoded({ extend:true })) //Mostrará os dados no backend

// Página ao incluir um usuário
app.post('/usuarios', (requisicao, resposta) => {
    console.log(requisicao.body) //Mostrará o corpo do form
    resposta.send('<h1>Parabéns. Usuário incluído!!!.</h1>')
})

/*Se o method fosse GET
app.get('/usuarios', (requisicao, resposta) => {
    console.log(requisicao.query)
    resposta.send('<h1> Parabéns. Usuário incluído!!! </h1>')
})
*/

//Página ao alterar um usuário
app.post('/usuarios/:id', (requisicao, resposta) => {
    console.log(requisicao.params.id) //id impresso fora do objeto 
    console.log(requisicao.body)
    resposta.send('<h1>Parabéns. Usuário Alterado!!! </h1>')
})


app.listen(3003)