/*
31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
*/

function contagemDeNumerosNegativos (){

    let numerosInteiros = [-3, -5, -1 , 2, 15, 20, -4, -10, 8, 6, -11]

    let conagemNumeros = 0;

    for(i = 0; i < numerosInteiros.length; i++){
        if ( numerosInteiros[i] < 0){
            conagemNumeros++;
        }
        console.log(conagemNumeros);
    }
}

contagemDeNumerosNegativos();