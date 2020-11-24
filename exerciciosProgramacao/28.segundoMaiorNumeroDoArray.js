/*
Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
*/

function segundoMaior(valores){

    valores.sort( (a,b) => a - b);
    return valores[valores.length -2];
}

console.log(segundoMaior([12, 16, 1, 5]))
console.log(segundoMaior([8, 4, 5, 6]))