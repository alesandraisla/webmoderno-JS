//ES8: Object.values/Object.entries

const obj = { a:1, b:2, c:3 }
console.log(Object.values(obj)) //valores dos atributos do objeto
console.log(Object.entries(obj)) // Array de Array de chave e valor



//Melhorias na notação literal
const nome = 'Lara'
const pessoa = {
    nome, 
    ola() {
        return 'Oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola())

//Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())



