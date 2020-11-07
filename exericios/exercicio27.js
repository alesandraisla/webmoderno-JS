/*
27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/



    //verificar se existe um menor  objeto.altura para acessar a propriedade altura e comparar as duas
//while(//verfiicar se a idade do menor ultrapassou a do maior){
    // adicionar o crescimento anual na altura da criança menor e ao mesmo tempo conta mais um ano, 
    //contador estará fora, 
    // e tbm adicionar para o maior também ate que o menor chegue na altura do maior 
 //for >= tem que parar 
//}

function diferencaEntreCriancas (crianca1, crianca2){

    let contadorDeAnos = 0;
    let criancaMenor = null;
    let criancaMaior = null;

    if(crianca1.altura == crianca2.altura || crianca1.taxaDeCrescimento == crianca2.taxaDeCrescimento){
        return null;
    }

    if(crianca1.altura < crianca2.altura){
        criancaMenor = crianca1;
        criancaMaior = crianca2;
    } else if (crianca2.altura < crianca1.altura) {
        criancaMenor = crianca2;
        criancaMaior = crianca1;
    } 
       

    while(criancaMenor.altura < criancaMaior.altura ){
        criancaMenor.altura += criancaMenor.taxaDeCrescimento;
        criancaMaior.altura += criancaMaior.taxaDeCrescimento;
        contadorDeAnos++;
        console.log(criancaMenor, criancaMaior)
        if(contadorDeAnos > 1000){
            break;
        }
    }

    console.log(criancaMaior, criancaMenor, contadorDeAnos)

    return {
        crianca: criancaMenor,
        anos: contadorDeAnos
    }
}

let crianca1 = {
    altura: 40,
    taxaDeCrescimento: 1
}

let crianca2 = {
    altura: 60,
    taxaDeCrescimento: 0.5
}

diferencaEntreCriancas(crianca1, crianca2)
