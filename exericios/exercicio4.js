/*
04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/

function calcular (valor1, valor2){
    return {
        divisao: valor1 / valor2,
        resto: valor1 % valor2
    };
}

console.log("Infome um numero para dividendo e outro numero para divisor: ")
console.log(calcular(10,2))