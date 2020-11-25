/*Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.
*/

//=========Usando join e concat===========================

// function cumprimentar1(nome) {
//     const saudacao = "Olá"
//     return [saudacao, nome].join(', ').concat("!")
// }

// console.log(cumprimentar1("Barbie"))


// =========Concatenando normal =================================
// function cumprimentar2(nome) {
//     return "Olá, " + nome + "!"

// }

// console.log(cumprimentar2("Barbie"))


// ========= function array usando template string =====================
let cumprimentar3 = nomeDaPessoa => `Olá, ${nomeDaPessoa}!`


// function
// function cumprimentar2(nomeDaPessoa) {
//     return `Olá, ${nomeDaPessoa}!`
// }

console.log(cumprimentar3('Suzy'))





