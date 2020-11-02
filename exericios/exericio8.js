// // /*
// // 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
// // registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
// // mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// // pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// // vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// // jogo. (Número do pior jogo).
// // Obs.: O primeiro jogo não conta como novo recorde do melhor.
// // Exemplo:
// // String: “10 20 20 8 25 3 0 30 1”
// // Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
// // aconteceu no sétimo jogo.)
// // */

//split e converter string para numero

function jogos (lista){
    lista = lista.split(" ");
    // console.log(lista);
 
    lista = lista.map(function(item){
        return parseInt(item);
    })

    // console.log(lista)
  

    for(let i = 0; i < lista.length; i++){
        console.log(lista[i]);

        let numero = lista[i];

        console.log('numero', numero)

        // if(lista[i] > numero.push(lista[i])){
        //     console.log('mostrar')
        // } else if (lista[i] < numero){
        //     console.log('Não mostrar')
        // }
        let numeroMaior = 0;
        let numeroMenor= 0;
        let retorno = [];

        if(lista[i] > lista[numeroMaior]){
            numeroMaior = i;
            console.log('maior', numeroMaior)
        } else if (lista [i] < lista[numeroMenor]){
            numeroMenor = i;
            
            retorno.push(lista [i])
            
            console.log('menor', numeroMenor)
            console.log(retorno)
        }

        console.log('fim')
    }
    
    //em cima da lista dos inteiros  push
    //indices que teve o melhor e pior resultado
    //array if se o item atual é menor que o item anterior
}



jogos("10 20 20 8 25 3 0 30 1")
console.log(jogos("10 20 20 8 25 3 0 30 1") == [3, 7] )


// for(){
    //     //menor pontuação recorde 
    // }