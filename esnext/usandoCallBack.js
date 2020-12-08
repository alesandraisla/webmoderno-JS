//Sem promise...

const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, resposta => {
        let resultado = ''

        resposta.on('data', dados => {
            resultado += dados
        })

        resposta.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

//Chamadas encadeadas callback dentro de outra 
let nomes = []
getTurma('A', alunos => {
 //   console.log(alunos[0].nome)
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`))
            console.log(nomes)
        })
    })
})