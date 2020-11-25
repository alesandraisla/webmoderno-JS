/*
Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
exemplo a seguir:
*/

//Object entries e foreach==================================================


function inverter(objeto) {
    const objetoInvertido = {}

    Object.entries(objeto).forEach( parChaveValor => {
        const chave = 0;
        valor = 1;

        objetoInvertido[ parChaveValor[valor] ] = parChaveValor[chave]
    })

    return objetoInvertido
}

console.log(inverter({ a: 1, b: 2, c: 3}))

//Object entries map e reverse ========================================================

// function inverter(objeto) {
//     const paresDeChaveValorInvertidos = Object.entries(objeto).map( parChaveValor =>
//          parChaveValor.reverse())

//     return Object.fromEntries(paresDeChaveValorInvertidos)
// }

// console.log(inverter({ a: 1, b: 2, c: 3}))



//============================================================================

// function inverter(colecaoChaveValor){
//     colecaoChaveValor = {a: 1, b:2, c: 3}
    
//     Object.entries(colecaoChaveValor).forEach(elemento => {
//         console.log(`{${elemento[1]} : ${elemento [0]}}`)
//     })
// }

// inverter()


// function inverter(colecaoChaveValor){
//     colecaoChaveValor = {a: 1, b:2, c: 3}

//   Object.keys(colecaoChaveValor).forEach(function(elemento){
//        console.log(colecaoChaveValor[elemento] + " : " + elemento)
//   })

// }

// inverter()




