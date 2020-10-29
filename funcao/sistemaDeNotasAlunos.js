console.log('---------------------------------------------------------------')
console.log('Digite as quatro notas do aluno: (ex: 8.1, 7.0, 10.0, 8,8)')
console.log('---------------------------------------------------------------')

function calcular (n1, n2, n3, n4){
   
    if(n1 < 0 || n2 < 0 || n3 < 0 || n4 < 0){
        console.log('algum numero é menor que 0, favor corrigí-lo.')
    } else if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)){ 
        console.log('algum numero é uma letra, favor digitar a nota correta.')
    }else {
        let resultado = (n1 + n2 + n3 + n4) / 4;
        console.log(resultado.toFixed(2))

    }
}

// function calcular (...notas){
//     if(notas.some(n => n < 0)) {
//         console.log('algum numero menor que 0')
//     } else if (notas.some(n => isNaN(n))){ // errado só usa o 'a'
//         console.log('algum não e numero')
//     }else {
//         console.log(notas.reduce((total, n) => total + n, 0))
//     }
// }

calcular(10.0,10.0,9.0,9.5)
calcular(-2,-3,-1,-3)
calcular(['diandinauidna'])

// var a=1; 
// var b=2;
// var c=3;
// var d=4;
// // igual
// var a=1, b=2, c=3, d=4;
// if(b > 1){
//     console.log('texto')
// }

// console.log(isNaN(1, "efgerg"))
