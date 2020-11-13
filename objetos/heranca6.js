//função construtora 
function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

//operador new - >> cria um novo objeto e o prototipo desse objeto criado aponta para a função 

//instanciar objetos a partir da função
const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

//simulando o new

function novo(f, ...parametros){
    const obj = {}  //criou um objeto novo
    obj.__proto__ = f.prototype // associou o prototipo do objeto ao atributo prototype da função 
    f.apply(obj, parametros) //executar a função f passando como objeto de contexto o objeto e parametros
    return obj  //retorna o objeto criado 

}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)

console.log(aula3, aula4)

