// /*
// 37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
// como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
// bem como a soma dos elementos.
// */

/*
PA
2, 5,8 ,11, 14
*/
//Progressão Aritmética - PA

function progressaoAritmetica(numeroDeTermos, a1, razao ){

    let resultado = 0;
    resultado = a1 +( numeroDeTermos - 1) * razao
    return (`Número de termos: ${numeroDeTermos}, Primeiro termo: ${a1}, Razão: ${razao}, Resultado= ${resultado}`)

}

console.log(progressaoAritmetica(5, 2, 3))

/*
PG
2,10,50,25
*/


//Progressão geométrica PG

function progessaogeometrica (numeroDeTemosPg, a1Pg, razaoPg ){

        let resultadoPg = 0;
        resultadoPg = a1Pg * Math.pow(razaoPg, numeroDeTemosPg - 1);
        return resultadoPg;
}

console.log(progessaogeometrica(4,2,5))