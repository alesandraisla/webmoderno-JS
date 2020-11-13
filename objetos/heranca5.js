//Toda função tem o  atributo chamado .prototype 

console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//reverse -> reverte
//split -> quebra e gera uma array inclusive com espaço em branco
//join -> juntar todos os elementos na string
//this -> acessa 

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log('Escola Cd3r'.reverse())



Array.prototype.first = function(){
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(['a', 'b', 'c'].first())