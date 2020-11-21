/*
Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
 objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
exemplo a seguir:
*/


function inverter(colecaoChaveValor){
    colecaoChaveValor = {a: 1, b:2, c: 3}
    
    Object.entries(colecaoChaveValor).forEach(elemento => {
        console.log(`{${elemento[1]} : ${elemento [0]}}`)
    })

}

inverter()


// function inverter(colecaoChaveValor){
//     colecaoChaveValor = {a: 1, b:2, c: 3}

//   Object.keys(colecaoChaveValor).forEach(function(elemento){
//        console.log(colecaoChaveValor[elemento] + " : " + elemento)
//   })

// }

// inverter()