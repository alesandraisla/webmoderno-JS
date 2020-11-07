/*
33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
*/

let vetorInteiro = [5, 11, 9, 4];
let vetorString = ['blue', 'pink', 'purple', 'white'];
let vetorDouble = [5.2, 10.5, 3.4, 8.7];

function uniaoDosVetores (){
    console.log(`${vetorInteiro}, ${vetorString}, ${vetorDouble}`);

    console.log(vetorInteiro, vetorString, vetorDouble);
}

uniaoDosVetores();
