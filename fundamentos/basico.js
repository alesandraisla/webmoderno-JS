//variaveis ( var, let, const)  tipos dinâmicos
/*
* O valor que var e let recebe pode ser modificado
* O valor do const pe fixo
*/

// var a = 10;
// let b = 20;
// const c = a + b;

// console.log(a);
// console.log(b);
// console.log(c);

// a = 'teste';
// const d = a+ b;
// console.log(a);
// console.log(d);

// b = 'novo teste';
// const e = a + b;
// console.log(b);
// console.log(e);

// Operadores

//unários - que acrescenta valor nele mesmo

// let a = 3;
// a++;   //postfix operador depois da variável
// ++a; //prefix
// console.log(a);

// binários (ariméticos, atribuição, relacionais e lógicos)

// //infix operador no meio dos operandos
// let b = 15; // atribuição
// let x = 5 + b // infix 
// console.log(x);

// let y = 3; // atribuição
// y += 3;  // atribuição
// y = y + 3;
// y *= 7;  // atribuição
// console.log(y);

// //Comparar valores
// console.log(2 == '2');  //true
// console.log(2 == 2); // true 
// //Comparar o tipo
// console.log( 2 === '2'); // false
// console.log( 2 === 2); // true
// console.log(2 !== '2'); // true
// console.log(2 != '2'); // false 

// // >  <  >=  <=  != resultado é true ou false
// console.log(3 < 2);
// console.log(!(3 < 2));
// console.log(!'Teste'); //dupla negação resultará em verdadeiro


// let temSol = true;
// let estouComDinheiro = false;
// let vouSair = temSol || estouComDinheiro;  //  && <E> ,  || <OU>
// console.log(vouSair);



//ternario
// ? :

// let temSol = true;
// let estouComDinheiro = false;
// let vouSair = temSol || estouComDinheiro;  //  && <E> ,  || <OU>
// let resultado = vouSair ? 'Eba, vou sair de casa!' : 'Que chato, ficarei em casa';
// console.log(resultado);


// Estrutura de controle (condicional)
//testes

// let nota = 8.3;
// let temBomComportamento = true;

// if (nota >= 9 && temBomComportamento){
//     console.log('Quadro de honra!');
//     console.log('Parabéns');
// } else if (nota >= 7){
//     console.log('Aprovado');
// } else {
//     console.log('Recuperação');
//     console.log('É uma pena');
// }

// for(let i = 0; i < 100; i += 10){
//     console.log(i);
// }

//Arrays - armazena multiplos valores dentro de uma unica estrutura (unidimensional) - tem indice
//lenght -tamanho do array qt de elementos que tem dentro dele
// ///            0     1   2     3     4       5
// const notas = [7.1, 8.5, 5.3, 8.9, 9.2]; // undefined

// console.log(notas[2]);

// for(let i = 0; i < notas.length; i++){
//     console.log("indice:", i);
//     console.log(nota[i]);
// }

// // outra forma de se fazer

// for(let nota of notas){
//     console.log(nota);
// }

//outra forma
//passa uma função como parâmetro

// notas.forEach(nota => console.log(nota));

// Função 

// function soma(a, b = 0){
//     // if(b == undefined){
//     //     b = 10;
//     // }
//     // console.log(a + (b || 10))
//     console.log(a + b);

// }

// // soma(2, 5);
// soma(2) // 2 + undefined = NaN, mas como aplicou uma condição não mostrará erro

function soma(a = 1, b =1){
    console.log(a + b);
}

soma(3);

function executar(fn){
    if(typeof fn === 'function'){
        console.log('Executando');
        fn(3,100);
    }
   
    console.log(typeof fn); //fn era number e tornou-se function
    console.log(typeof executar);
}

executar(3);
executar(soma);

function subtrair(c, d){
    return c - d;

}

let y = subtrair(300,250)
console.log(y);

//function declaration

function multiplicar1 (a,b){
    return a * b;
}

//function expression (anônima) associa o resultado da função a uma variável ou const

const multiplicar2 = function(){
    return a * b;
}

console.log(multiplicar1(4,5));
console.log(multiplicar2(4,5));

