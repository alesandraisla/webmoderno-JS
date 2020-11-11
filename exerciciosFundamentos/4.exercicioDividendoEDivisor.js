/*
04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/

function divisaoDeDoisValores (dividendo, divisor){
    return {
        resultadoDaDivisao: Math.floor(dividendo / divisor),
        resto: dividendo % divisor
    };
}

console.log("Infome um numero para dividendo e outro numero para divisor: ")
console.log(divisaoDeDoisValores(10,2))
console.log(divisaoDeDoisValores(11,4))