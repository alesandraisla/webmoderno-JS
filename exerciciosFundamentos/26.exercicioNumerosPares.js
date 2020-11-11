/*
26) Fazer um programa para encontrar todos os pares entre 1 e 100.
*/

//Usando o FOR

function encontrarValoresPares (){
        
    for (let numero = 1; numero <= 100; numero++){
        if ((numero % 2) == 0){
            console.log(`${numero} par`)
        }
    }
}

encontrarValoresPares();



// //Usando o while

// function valoresPares(){
//     numero = 1;

//     while(numero <= 100){
//         if ((numero % 2) == 0){
//             console.log(`${numero} par`)
//         }
//         numero++;
//     }
// }

// valoresPares()