const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

//__proto__   ->> acessa quem é o protótipo do objeto filho (objeto pai)
//Um objeto criado ele aponta para Object.prototype
//O protótipo Serve para não replicar os mesmos atributos e mesmas funções em mesmo objeto.

console.log(ferrari.__proto__);  //forma que acessa
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);


//O protótipo do Object.prototype será null
console.log(Object.prototype.__proto__);


//Object é uma função apenas dentro de função o prototype está presente
function meuObjeto(){}
console.log(typeof meuObjeto, typeof Object);
console.log(Object.prototype, meuObjeto.prototype);