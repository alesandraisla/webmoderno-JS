//Não foi atribuído a variável, pois está requerindo do escopo global 
require('./global')

console.log(MinhaApp.saudacao())
console.log(MinhaApp.nome)
// console.log(global.MinhaApp.saudacao())

MinhaApp.nome = 'Eita, pode ser mudado em qualquer lugar, pois é global.'
console.log(MinhaApp.nome)