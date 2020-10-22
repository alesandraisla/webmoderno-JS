//Ponto é uma forma de acessar os atributos

console.log(typeof console);
console.log(Math.floor(6.1)); //Arredonda para baixo
console.log(Math.ceil(6.1)); //Arredonda para cima

//Criar dinâmicamente atributo no objeto
const obj1 = {}
obj1.nome = 'Caneta';
// obj1['nome'] = 'Caneta2';   
console.log(obj1);  //visualiza o nome da const e o atributo 
console.log(obj1.nome);  //Visualiza apenas o atributo

function Obj(nome){
    this.nome = nome // atribuição (publico)
}

const obj2 = new Obj ('Caderno');
const obj3 = new Obj ('Lápis');
console.log(obj2.nome);
console.log(obj3.nome);