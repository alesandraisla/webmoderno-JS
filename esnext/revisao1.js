//let e const (Tem escopo de bloco, só é acessado dentro do escopo)

{
    var a = 2
    let b = 5
    const c = 10
    console.log(b)
    console.log(c)

}

console.log(a)

//Template string (Pode quebrar linha)
const produto = 'iPad'
console.log(`${produto} é caro!`)

//Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const {idade: i,  nome} = {nome: 'Ana', idade: 9}
console.log(i, nome)