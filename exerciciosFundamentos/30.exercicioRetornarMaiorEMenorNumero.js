/*
30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor
*/

    // let numeros = [5, 100, 35 ,40, 105]

    // let maximo = Math.max(...numeros)
    // console.log(maximo)

    // let minimo = Math.min(...numeros);
    // console.log(minimo)

    function maiorEMenor(listaDeNumeros){
        let maior;
        let menor;
        for(let indice = 0; indice < listaDeNumeros.length; indice++){
            if(maior === undefined && menor === undefined){
                maior = listaDeNumeros[indice];
                menor = listaDeNumeros[indice];
                console.log(maior)
                console.log(menor)
            } else {
                if(listaDeNumeros[indice] > maior){
                    maior = listaDeNumeros[indice]
                    console.log(maior)
                }
                if(listaDeNumeros[indice] < menor){
                    menor = listaDeNumeros[indice]
                    console.log(menor)
                }
            }
        }
        return [maior, menor]
    }


    listaDeNumeros = [ 10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

    console.log(maiorEMenor(listaDeNumeros))


