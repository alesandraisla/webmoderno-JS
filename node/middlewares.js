//middleware patterh (chain of responsibility)
//contexto é um objeto que será transmitido de uma função para outra 
const passo1 = (contexto, next) => {
    contexto.valor1 = 'mid1';
    next()
}

const passo2 = (contexto, next) => {
    contexto.valor2 = 'mid2'
    next()
}

//Suprimiu o parametro next, pois não vai chamar o próximo passo 
const passo3 = contexto => contexto.valor3 = 'mid3'


//Criar uma função que irá executar todos os middlewares

const executar = (contexto, ...middlewares) => {
    const executarCadaPasso = indice => {
        middlewares && indice < middlewares.length && 
        middlewares[indice](contexto, () => executarCadaPasso(indice + 1))

    }
    executarCadaPasso(0)
}


const contexto = {}
executar(contexto, passo1, passo2, passo3) //pode trocar a ordem de execução e suprimir passos
console.log(contexto)
