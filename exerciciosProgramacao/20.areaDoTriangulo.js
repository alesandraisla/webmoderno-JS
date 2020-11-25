/*
Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
deverá ser de duas casas decimais, arredondando se necessário.
*/



function areaDeTriangulo (base, altura){

   const resultadoDoTriangulo = (base * altura) / 2
   
    return resultadoDoTriangulo.toFixed(2)
}

console.log(areaDeTriangulo(10,15))
console.log(areaDeTriangulo(7,9))
console.log(areaDeTriangulo(9.25,13.1))