//função (verbo) define um bloco, de código pode chamar onde quiser e reuzar
//função sem retorno
function imprimirSoma(a, b){
    console.log(a + b);
}

imprimirSoma(2,3);
imprimirSoma(2);  // pode passar apenas um valor, porém o segundo ficará undefined dará NaN
imprimirSoma(); // dará NaN
imprimirSoma(2,10,5,10,15);  // não dará erro, porém só utilizará apenas os dois parâmetros


console.log('=====================================================================================')

//função com retorno
//Tratando um parâmetro com um valor caso não coloque na chamada

function soma(a,b = 1){
    return a + b;
}

console.log(soma(11, 5));
console.log(soma(11));  // por não chamar o valor de b, ele calculará com o valor informado no parâmetro


