/*
Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais.
*/

/*Flags:
g -> global. Busca por todas as ocorrências.
i -> case insensitive. Não faz distinção entre maiúsculas e minúsculas.
*/

// function removerVogais(palavra){

//     return palavra.replace(/[aeiouà-ú]/gi, '');
// }


// let removerVogais = palavra => palavra.replace(/[aeiouàá-ú]/gi, '');


// console.log(removerVogais("Cod3r"))
// console.log(removerVogais("Fundamentos"))


function removerVogais(frase) {
    const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    vogais.forEach(vogal => frase = frase.replace(vogal, ''))

    return frase;
}

console.log(removerVogais("Cod3r"))
console.log(removerVogais("Fundamentos"))
