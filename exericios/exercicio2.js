/* 
2) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).

*/

function triangulos (lado1, lado2, lado3){

    if(lado1 === lado2 && lado2 === lado3 && lado1 === lado3){
        return (`Este triangulo é um equilátero, pois tem lados iguais ${lado1}, ${lado2}, ${lado3}`);
    } else if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3){
        return (`Este triangulo é um escaleno, pois todos os lados são diferentes ${lado1}, ${lado2}, ${lado3}`)
    } 
    
    return (`Este triangulo é um isósceles, pois dois lados são iguais ${lado1}, ${lado2}, ${lado3}`)
    
}

console.log(triangulos(5,5,5))
console.log(triangulos(5,3,5))
console.log(triangulos(5,5,3))
console.log(triangulos(3,5,5))
console.log(triangulos(3,5,8))