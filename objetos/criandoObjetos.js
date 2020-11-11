//Usando a notação literal
const obj = {}
console.log(obj)

//Objeto criado a partir de uma função usando o operador new 
console.log(typeof Object, typeof new Object);
const obj2 = new Object;
console.log(obj2)

//Funções construtoras => torna a variável publica, ou seja, visivel para fora do objeto
//quando coloca this o atributo ficará publico

function Produto(nome, preco, desconto){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

//criação de novas instâncias
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())


//Função factory

function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome, 
        salarioBase,
        faltas, 
        getSalario(){
            return (salarioBase / 30 * (30 - faltas));
        }
    }
}

const f1 = criarFuncionario('Tidus', 7980, 4);
const f2 = criarFuncionario('Yuna', 11400, 1);
console.log(f1.getSalario(), f2.getSalario());


//Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma função famosa que retorna Object...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON.info)

