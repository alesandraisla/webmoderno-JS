//Map => chave(aceita função, objeto, string, numero, boolean - não pode ter repetição) e valor
//set -> atribui |||||  get -> acessa

const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react) // errado
//Forma correta
console.log(tecnologias.get('react')) 
console.log(tecnologias.get('react').framework)

//ou

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})

//has ->> se o elemento está ou nao contido dentro do Map, e retorna verdadeiro ou falso
console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))

//size --> quantos elementos estão presentes dentro do Map
console.log(chavesVariadas.size)

//Não pode ter chave duplicadas, se ocorrer irá sobrescrever
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
console.log(chavesVariadas)
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)