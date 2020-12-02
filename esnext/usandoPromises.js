//Com promise...

const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, resposta => {
            let resultado = ''
    
            resposta.on('data', dados => {
                resultado += dados
            })
    
            resposta.on('end', () => {
                try{
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)

                }
            })
        })
    })
}

// //Forma deselegante
// let nomes = []
// getTurma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`))
//         getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(c => `C ${c.nome}`))
//             console.log(nomes)
//         })
//     })
// })

//Forma mais elegante
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message)) //tratamento de erro 

// getTurma('D').catch(e => console.log(e.message))    
