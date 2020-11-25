// /*
// Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
// vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
// maiúsculas de minúsculas.
// // */

//============= Usando FORIN ================

// function contarCaractere (caractere, frase){

//     let conjunto = frase.split("")
//     let contador = 0;

//     for (const indice in conjunto) {
//         if(conjunto[indice] === caractere){
//             contador++;
//         }
//     }
//     return contador;
// }

// console.log(contarCaractere("r", "A sorte favorece os audazes"))
// console.log(contarCaractere("c", "Conhece-te a ti mesmo"))

//==============================================================

//============= USANDO FOR ================

// function contar (caractere, frase){

//     let conjunto = frase.split("")
//     let conte = 0;
    
//     //Se não fosse case-sensitive
//     // let conjunto = frase.toLowerCase().split("")
//     // caractere = caractere.toLowerCase()

//     for(let indice = 0; indice < conjunto.length; indice++){
//         if(conjunto[indice] === caractere){
//             conte++;
//         }
//     } 

//     return conte;
// }

// console.log(contar("r", "A sorte favorece os audazes") ==  2) // teste
// console.log(contar("r", "A sorte favorece os audazes"))
// console.log(contar("c", "Conhece-te a ti mesmo") == 1) // teste
// console.log(contar("c", "Conhece-te a ti mesmo"))


//==============================================================

//============= USANDO FOREACH ================


function contar (caractere, frase){

    let conjunto = frase.split(""); 
    let conte = 0;

    conjunto.forEach(function (letra){
        if(letra === caractere){
            conte++;
        }
    })

// conjunto.forEach(letra => {
//     if(letra === caractere){
//         conte++
//     }
// })

    return conte;
}

console.log(contar("r", "A sorte favorece os audazes") ==  2) // teste
console.log(contar("r", "A sorte favorece os audazes"))
console.log(contar("c", "Conhece-te a ti mesmo") == 1) // teste
console.log(contar("c", "Conhece-te a ti mesmo"))


function contarCaractere(caractereBuscado, frase) {
    return [...frase].filter(caractere => caractere === caractereBuscado).length;
}



console.log(contarCaractere("r", "A sorte favorece os audazes"))
console.log(contarCaractere("c", "Conhece-te a ti mesmo"))




