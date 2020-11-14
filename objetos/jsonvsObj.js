//Json formato textual de dados , não é algo que é executável

const obj = { a: 1, b: 2, c: 3, soma() {return a + b + c }}

console.log(JSON.stringify(obj))

//transformar para um objeto
//atributo e string devem ser delimitados por aspas duplas  

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))