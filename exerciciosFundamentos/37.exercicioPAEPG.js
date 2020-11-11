// /*
// 37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
// como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
// bem como a soma dos elementos.
// */


//Progressão Aritmética - PA
console.log('Progressão Aritmética - PA')
function progressaoAritmetica(numeroDeTermos, a1, razao ){
    let resultado = 0;
    resultado = a1 +( numeroDeTermos - 1) * razao
    console.log(`Número de termos: ${numeroDeTermos}, Primeiro termo: ${a1}, Razão: ${razao}, Resultado= ${resultado}`)
    console.log('Soma: ' + (numeroDeTermos * (a1 + (a1 + ((numeroDeTermos-1)*razao))))/2)
}

progressaoAritmetica(5, 2, 3);

//Progressão geométrica PG
console.log('Progressão Geométrica - PG')
function progessaogeometrica (numeroDeTemosPg, a1Pg, razaoPg ){
        let resultadoPg = 0;
        resultadoPg = a1Pg * Math.pow(razaoPg, numeroDeTemosPg - 1);
        console.log(`Números de termos: ${numeroDeTemosPg}, Primeiro termo: ${a1Pg}, Razão: ${razaoPg}, Resultado= ${resultadoPg}`);
        console.log('Soma: ' + (a1Pg * ((razaoPg**numeroDeTemosPg)-1))/(razaoPg-1))
}

progessaogeometrica(4,2,5)



// function pA (n, a1, r) {
//     for (let i = 0; i < n; i++) {
//         console.log(a1 + r*i)
//     }
//     console.log('Soma: ' + (n * (a1 + (a1 + ((n-1)*r))))/2)    
// }

// function pG (n, a1, r) {
//     //console.log(a1)
//     for(let i = 0; i < n; i++){
//         console.log(a1*(r**i))
//     }
//     console.log('Soma: ' + (a1 * ((r**n)-1))/(r-1))
// }

// pA(5, 2, 3)
// console.log('----------------');
// pG(4, 2, 5)