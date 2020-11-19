/*
Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.
*/


// let numero = [10,70,22,43]


// numero.forEach(function(nome,indice,array){
//     console.log(indice, nome);
//     if(numero % 2 == 0){

//         console.log(Object.entries(numero));
//     }
// })


function apenasPar (numerosDeArray){
    let numerosDeArray = [10, 70, 22, 43]

    for(let i = 0; i < numerosDeArray; i++){
        if(numerosDeArray[i] % 2 == 0){
            console.log(numerosDeArray[i])
            i++;
        }
                
    }
}



apenasPar()



