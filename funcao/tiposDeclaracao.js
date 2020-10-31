//function declaration
//o interpretador do JS primeiro carrega as funções e depois executa os códigos 
console.log(somar(5,15));
function somar (x, y){
    return x + y;
}

//obrigado a chamar depois da função
//function expression (const, var ou let) anônima
const sub = function (x,y){
    return x - y;
}
console.log(sub(25,5))

//obrigado a chamar depois da função
//named function expression nomeada
const mult = function mult(x,y){
    return x * y;
}
console.log(mult(2,10))
