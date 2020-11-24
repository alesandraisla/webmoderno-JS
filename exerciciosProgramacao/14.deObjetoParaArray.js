/*
Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento:
*/

converterDeObjetoParaArray1 = ({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
})

console.log(Object.entries(converterDeObjetoParaArray1));


converterDeObjetoParaArray2 = ({
    codigo: 11111,
    preco: 12000
})

console.log(Object.entries(converterDeObjetoParaArray2))

