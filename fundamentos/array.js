const valores = [ 7.7 ,8.9, 6.3, 9.2];
 
console.log(valores[0], valores [3]);  //filtra pelo indice desejado
valores [4] =10;      //inclusão de um novo elemento no array
console.log(valores.length); //mostra o comprimento do array 

//push adiciona novos elementos no array

valores.push({id:3}, false, null, 'teste');
console.log(valores);

// retira o ultimo elemento do Array

console.log(valores.pop());
console.log(valores);

// deleta o indice que o usuário escolher

delete valores [0];
