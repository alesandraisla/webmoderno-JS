const disciplina = 'Programação';

console.log(disciplina.charAt(5)); //pegar o valor 
console.log(disciplina.charCodeAt(5));//pega o código do valor na tabela unicode
console.log(disciplina.indexOf('r'));  //descobrir o indice ao digito 

//chamadas
console.log(disciplina.substring(1)) // a partir do indice 1 até o final do indice
console.log(disciplina.substring(3,11)); // escolhe o primeiro e o ultimo indice

//Duas formas de concatenar
console.log('Disciplina de '.concat(disciplina).concat("!")); 
console.log('Ótima disciplina de ' + disciplina + "!");

console.log(disciplina.replace('y', 'o'));//substituir

console.log('Maçã, Uva, Morango, Manga'.split(','));//converter em Array

