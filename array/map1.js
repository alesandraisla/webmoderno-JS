/*Map -> Mapear os arrays , serve para transformar o array para outro array 
do mesmo tamanho só que com os dados transformados,
internamente ele tem um for, porém transforma os dados do array
não transforma um array atual ele gera um novo array
*/
const numeros = [1, 2, 3, 4, 5]

//for com proposito. função do map pode receber três parâmetros: Valor, indice,  array
let resultado = numeros.map(function(elemento){
    return elemento * 2;
})

console.log(resultado)

const somar10 = elemento => elemento + 10
const triplo = elemento => elemento * 3
const paraDinheiro = elemento => `R$ ${parseFloat(elemento).toFixed(2).replace('.', ',')}`

resultado = numeros.map(somar10).map(triplo).map(paraDinheiro);

console.log(resultado)





