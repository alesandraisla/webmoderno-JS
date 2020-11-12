const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // exibe as chaves
console.log(Object.values(pessoa)) //exibe valores
console.log(Object.entries(pessoa)) // exibe array composto de sub arrays entraves

//Exibe um elemento abaixo do outro chave e valor
Object.entries(pessoa).forEach(elemento => {
    console.log(`${elemento[0]}: ${elemento[1]}`)
    
});

//ou

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
    
});

//definir propriedade do objeto

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // listada
    writable: false, //modificada, funciona como freeze
    value: '01/01/2019' //atribuir
})

console.log(pessoa.dataNascimento);
pessoa.dataNascimento = '01/01/2017'; //não mudará poos definiu writable como false
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

//concatenar os atributos dos objetos para o primeiro objeto
const destino = { a: 1}
const objeto1 = { b: 2 }
const objeto2 = { c: 3, a: 4} //os ultimo elementos irão sobrescrever os antigos se houver propriedade no mesmo nome
const objeto = Object.assign(destino, objeto1, objeto2)

Object.freeze(objeto)
objeto.c = 123
console.log(objeto)
