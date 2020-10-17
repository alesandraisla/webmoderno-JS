let logico = true;
console.log(logico);

logico = false;
console.log(logico);

console.log('Valores verdadeiros');
console.log(!!1); // dupla negação resulta em verdadeiro
console.log(!!' '); //espaço em branco
console.log(!!-1); //dupla negação com valor negativo
console.log(!!'texto'); // duplca negação com texto
console.log(!![]); // dupla negação de Array
console.log(!!{}); // dupla negação de objeto
console.log(!!Infinity); // dupla negação valor infinito
console.log(!!(logico = true)); //  atribuição

console.log('Valores falsos');
console.log(!!0); //duplca negação com zero
console.log(!!''); // aspa vazia
console.log(!!null); // nulo
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(logico = false));

console.log('Operação para retornar tudo falso')
console.log(!!('' || null || 0 && ' ')); //por conta do E deu falso

let nome = '';
console.log(nome || 'Insira seu nome');