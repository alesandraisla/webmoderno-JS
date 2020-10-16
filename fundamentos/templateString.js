//Pode quebrar linha
// a variável fica dentro das chaves

const nome = 'Lara';
const concatenacao = 'Olá ' + nome + ' Seja bem vindo (a)! ';

//nome de variáveis
const template = `Olá ${nome} Seja bem vindo (a)!`

console.log(concatenacao);
console.log(template);
console.log(template.toUpperCase());
console.log(`Olá, tudo bem? ${nome}`);

// expressões
console.log(`1 + 1 = ${1+1}`);

//funções
const up = texto => texto.toUpperCase();

console.log(`Presta... ${up('atenção')}!`);

