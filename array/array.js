//Array é uma estrutura dinâmica, um objeto que organiza seus dados a partir de um indice começando do 0

console.log(typeof Array, typeof new Array, typeof [])

//instanciar array 
let aprovados = new Array ('Bia', 'Carlos', 'Ana');
console.log(aprovados)


//recomendações
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

//adicionar novo elemento dentro de uma array
aprovados [3] = 'Paulo' //substituir
aprovados.push('Abia')  //adicionar mais apropriado

console.log(aprovados)
console.log(aprovados.length)

aprovados [9] = ' Rafael'
console.log(aprovados.length)
console.log(aprovados [8] === undefined)

console.log(aprovados)

aprovados.sort() //altera o array ordena
console.log(aprovados)

delete aprovados [1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
//adiciona, remove  e faz os dois
//primeiro elemento é o indice que quer excluir 
//segundo elemento é a quantidade de indices que irá excluir
aprovados.splice(1,2, 'Elemento1', 'Elemento2')
//aprovados.splice(1,0, 'Elemento1', 'Elemento2'); // Caso queira só adicionar

console.log(aprovados)
