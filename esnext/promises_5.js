function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try{
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v), //erro
        err => console.log(`Erro esperado: ${err}`)
    )
    .then(() => console.log('Quase Fim!'))
    .catch(err => console.log(`Erro: ${err}`)) //tratando o erro
    .then(() => console.log('Fim!'))