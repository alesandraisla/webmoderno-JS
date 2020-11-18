/*
Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.

*/


// function repeticaoDeNumeros (elementoQueSeRepete, numeroDeVezesDaRepeticao){

//     let array = [];

//   for(let i = 0; i < numeroDeVezesDaRepeticao; i++){
//     elementoQueSeRepete++;
//     elementoQueSeRepete = elementoQueSeRepete -1;
//     array.push(elementoQueSeRepete)
    
//   }
//    return array;
// }

// console.log(repeticaoDeNumeros(7,3))

// //VERIFICAR AMANHÃ 
// console.log(repeticaoDeNumeros("codigo",2))




function verificar (numero, vezes){

    const numerosVezes = [];
 
    for(let i = 0; i < vezes; i++){

        if(typeof(numero)  == "number"){
            numero =  numero - 1;
            numerosVezes.push(numero);
            numero++
            console.log(`numeros ${numero}`)
            console.log(`vezes ${vezes}`)
            console.log(`array ${numerosVezes}`);
        }
            numerosVezes.push(numero);
            numero++;  
            console.log(`numeros ${numero}`)
            console.log(`vezes ${vezes}`)
            console.log(`array ${numerosVezes}`);
    }
}

console.log(verificar("codigo",3))
console.log(verificar(7,3))
