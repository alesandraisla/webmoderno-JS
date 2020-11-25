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


//Usando FORIN e PUSH ===============================================

// function objetoParaArray3(objeto) {
//     const resultado = []

//     for(let chave in objeto) {
//         resultado.push([chave, objeto[chave]])
//     }
//     return resultado;
// }

// console.log(objetoParaArray3({
//     nome: "Maria",
//     profissao: "Desenvolvedora de software"
//     }))
    
// console.log(objetoParaArray3({
//     codigo: 11111,
//     preco: 12000
//     }))


//Usando Object.key e map ==============================================

// function objetoParaArray4(objeto) {
//     const chaves = Object.keys(objeto);
//     const resultado = chaves.map(chave => [chave,objeto[chave]])
//     return resultado;
// }


// console.log(objetoParaArray4({
//     nome: "Maria",
//     profissao: "Desenvolvedora de software"
//     }))
    
// console.log(objetoParaArray4({
//     codigo: 11111,
//     preco: 12000
//     }))
    

//Usando object entries ==============================================

// function objetoParaArray5(objeto) {
//     return Object.entries(objeto)
// }


//     console.log(objetoParaArray5({
//         nome: "Maria",
//         profissao: "Desenvolvedora de software"
//         }))
        
//     console.log(objetoParaArray5({
//         codigo: 11111,
//         preco: 12000
//         }))
        
