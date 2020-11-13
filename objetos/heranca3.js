const pai = { nome: 'Cloud', corCabelo: 'preto'}

const filha1 = Object.create(pai) // é uma forma de prototype
filha1.nome = 'Tifa';
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla';
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

//Verificar se o atributo é do próprio objeto ou se veio por herança

for(let key in filha2){
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança ${key}`)
}