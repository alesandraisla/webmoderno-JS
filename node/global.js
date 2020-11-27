// console.log(global)

//Objeto congelado, para não conseguir ser mudado no globalCliente

global.MinhaApp = Object.freeze({
    saudacao(){
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema legal'
})