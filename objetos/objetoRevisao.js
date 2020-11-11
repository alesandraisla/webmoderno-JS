//Coleção dinâmica de pares chave/valoe

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)


//criação literal de objetos

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Suzy',
        idade: 43,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Melissa',
        idade: 23
    },{
        nome: 'Rayssa',
        idade: 30
    }],
    calcularValorSeguro: function(){
        //....
    }
}


carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av gigante'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)