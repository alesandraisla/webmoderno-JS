//Set ->> Não aceita repetição/não indexada

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Santa Cruz').add('Sport')
times.add('Nautico')
times.add('Santa Cruz')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Vasco')
console.log(times.has('Vasco'))


//ou

const nomes = ['Raquel', 'Aurora', 'Suzany', 'Aurora']
const nomesSet = new Set(nomes)
console.log(nomesSet)