console.log(module.exports === this)
console.log(module.exports === exports)


//vísivel fora do arquivo
//Aponta para mesmoa referência em memória 

this.a = 1
exports.b = 2
module.exports.c = 3

console.log(module.exports) //o que será retornado

exports = null
console.log(module.exports)

exports = {
    nome: 'teste'
}
console.log(module.exports)


module.exports = 5 //para atribuir 
console.log(module.exports)