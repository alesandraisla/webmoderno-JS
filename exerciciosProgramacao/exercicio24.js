/*
A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
*/


function buscaPalavrasSemelhantes(palavraDigitada, palavrasEncontradas){
    
    
    let filtragem = palavrasEncontradas.filter(function(elementoDaPalavraEncontrada){
        return elementoDaPalavraEncontrada.toLowerCase().indexOf(palavraDigitada.toLowerCase()) >-1;
    })

    return filtragem;
}

console.log(buscaPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))
console.log(buscaPalavrasSemelhantes("python", ["javascript", "java", "c++"]))