/*
28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares
*/

let numero = ['1', '2', '3', '4' ,'5' , '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16']

for( indice =0; indice < numero.length; indice++){

    if( (numero[indice] % 2 ) == 0){
        console.log(`${numero[indice]} par`)
    } else {
        console.log(`${numero[indice]} impar`)
    }

}



