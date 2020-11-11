/* 
2) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).

*/

function classificarTriangulos (lado1, lado2, lado3){

    if(lado1 === lado2 && lado2 === lado3 && lado1 === lado3){
        return (`Equilátero, pois tem lados iguais ${lado1}, ${lado2}, ${lado3}`);
    } else if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3){
        return (`Escaleno, pois todos os lados são diferentes ${lado1}, ${lado2}, ${lado3}`)
    } 
    
    return (`Isósceles, pois dois lados são iguais ${lado1}, ${lado2}, ${lado3}`)
    
}

console.log(classificarTriangulos(5,5,5))
console.log(classificarTriangulos(5,3,5))
console.log(classificarTriangulos(5,5,3))
console.log(classificarTriangulos(3,5,5))
console.log(classificarTriangulos(3,5,8))