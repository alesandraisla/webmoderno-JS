/*
A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
*/

//USANDO FILTER , TOLOWERCASE, INDEXOF

// function buscaPalavrasSemelhantes(palavraDigitada, palavrasEncontradas){
    
//     let filtragem = palavrasEncontradas.filter(function(elementoDaPalavraEncontrada){
//         return elementoDaPalavraEncontrada.toLowerCase().indexOf(palavraDigitada.toLowerCase()) >-1;
//     })

//     return filtragem;
// }

// console.log(buscaPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))
// console.log(buscaPalavrasSemelhantes("python", ["javascript", "java", "c++"]))


//FOROF, INCLUDES, PUSH ========================================================

function buscarPalavrasSemelhantes(inicio, palavras) {
    const resultado = []

    for(let palavra of palavras){
        if(palavra.includes(inicio)){
            resultado.push(palavra)
        }
    }

    return resultado;
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))
console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]))



//Usando FILTER e INCLUDES===============================================================

// function buscarPalavrasSemelhantes(inicio, palavras) {
//     return palavras.filter(palavra => palavra.includes(inicio))
// }

// console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))
// console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]))
