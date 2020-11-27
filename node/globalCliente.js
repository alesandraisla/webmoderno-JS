//Não foi atribuído a variável, pois está requerindo do escopo global 
require('./global')

console.log(MinhaApp.saudacao())
// console.log(global.MinhaApp.saudacao())
console.log(MinhaApp.nome)


MinhaApp.nome = 'Eita, pode ser mudado em qualquer lugar, pois é global.'
console.log(MinhaApp.nome)