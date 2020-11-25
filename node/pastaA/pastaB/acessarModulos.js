//Primeira forma
//Para sair de uma pasta usa =>>>>>>>>> ../

const moduloA = require('../../moduloA')

//Segunda forma copiando copy path do próprio arquivo
// const moduloA = require('/Users/alesandra/Documents/Cursos/Web_Moderno_Javascript/node/moduloA.js')

console.log(moduloA.ola)

//Usando em um arquivo index nao precisa colocar o nome da propria pasta
const c = require('./pastaC')
console.log(c.ola2)


//Usando em http aparecerá no localhost8080 do browser 

// const http = require('http')
// http.createServer((req, res) => {
//     res.write('Bom dia')
//     res.end()
// }).listen(8080)