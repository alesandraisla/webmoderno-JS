//number é inteiro e real

const peso1 = 1.0;

const peso2  = Number('2.0');   //number com N maiusculo é uma função

console.log(peso1, peso2);
console.log(typeof peso1); //number com n minusculo é um tipo
console.log(typeof peso2);
console.log(Number.isInteger(peso1)); 
console.log(Number.isInteger(peso2));

const avaliacao1 = 8.5;
const avaliacao2 = 9.9;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media);
console.log(media.toFixed(2));   //altera a quantidade de casas decimais
console.log(media.toString(2));  // Converte em binário

console.log("===================================================");

const pesoExercicios = 4.0;
const pesoProva = 2.0;
const ex1 = 9.0
const ex2 = 9.0
const ex3 = 8.0
const ex4 = 8.0
const prova = 9.0


const somaEx = ex1 + ex2 + ex3 + ex4

const mediaEx = somaEx / pesoExercicios;
console.log("Média das quatro atividades:", mediaEx); //9. média das primeiras atividades

const mediaFinal = (mediaEx + prova) / pesoProva
console.log("Média final (atividade+prova):", mediaFinal);