//Não precisa controlar tanto a var I

//recebe o indice 

//array
const notas = [5.3, 7.7, 8.9, 9.1, 7.5]

for(let i in notas){
    console.log(i, notas[i]);
}

//objetos (Mais interessante usar em objetos)

const pessoa = {
    nome: 'Vanessa',
    sobrenome: 'Silva',
    idade: 25,
    peso: 59
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}