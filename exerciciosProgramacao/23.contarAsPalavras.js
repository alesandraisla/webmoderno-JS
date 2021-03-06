/*
Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.
*/

//Usando FOR =======================================================================

// function contarPalavras(frase) {
//     let conversaoDaFrase = frase.split(" ")
//     let quantidadeDePalavras = 0;
//     for(let i = 1; i <= conversaoDaFrase.length; i++){
//         quantidadeDePalavras = i;
//     }
//     return quantidadeDePalavras;
// }

// console.log(contarPalavras("Sou uma frase") == 3)  //teste
// console.log(contarPalavras("Sou uma frase"))
// console.log(contarPalavras("Me divirto aprendendo a programar") == 5) // teste
// console.log(contarPalavras("Me divirto aprendendo a programar"))


//Usando split e length ===========================================================


function contarPalavras(frase) {
    const palavras = frase.split(" ")
    return palavras.length;
}


console.log(contarPalavras("Sou uma frase"))
console.log(contarPalavras("Me divirto aprendendo a programar"))