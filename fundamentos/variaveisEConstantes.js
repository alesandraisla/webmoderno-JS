//var -> pode redeclarar dentro de um mesmo escopo (mais de uma vez)
// let -> Não pode redeclarar
//const -> Não pode fazer uma nova atribuição de valor , não tem motivo para mudar

var a = 5;
let b = 1;

var a = 10;
//let b = 2;
b = 40;

console.log("Var e let ", a, b);

const c = 3;

console.log("constante", c);




