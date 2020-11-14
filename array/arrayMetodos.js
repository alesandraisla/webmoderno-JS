const pilotos = [ 'Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Remove o ultimo elemento do array 
console.log(pilotos)

pilotos.push('Verstappen') //adiciona
console.log(pilotos)

pilotos.shift() // remove primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona elemento da primeira posição
console.log(pilotos)

//splice pode adicionar e remover elementos
//adicionar 
pilotos.splice(2,0, 'Bottas', 'Massa')
console.log(pilotos)
//remover
pilotos.splice(3,1)
console.log(pilotos)

//slice retorna um novo array (slice - pedaço)

const algunsPilotos1 = pilotos.slice(2) 
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)

