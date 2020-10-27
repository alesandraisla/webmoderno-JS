//Variável  hoisting jogar pra cima acontece só com o var

    // var a = 15;
    // console.log(a);

    // var a = 'Pode sobrescrever';
    // console.log(a);


// Let

    // let b = 20;
    // console.log(b);
    // // let b = 'Mudando o conteúdo'; //Não funcionará sobrescrever
   

// Const

    // const c = 25;
    // console.log(c);
    

// Arrays (Adicionar e deletar elementos)

    // let comidas = ['pizza', 'coxinha', 'bolo'];
    // console.log(comidas);

    // comidas [3] = 'risole'; //adicionar 
    // console.log(comidas);
    // comidas.push('pudim', 'empada'); // adicionar vários
    // console.log(comidas);
    // delete comidas [3]; //exclusão 
    // console.log(comidas);

//Objetos são blocos aninhados de pares nome/valor

    // let cadastroProduto = {
    //     nome: 'notebook',
    //     valor: 3999.00,
    //     marca: 'Samsung',
    //     formaDePagamento: {
    //         vista: 3800.00,
    //         parcelado: 4200.00
    //     }
    // }

    // // console.log(cadastroProduto);

    // let cadastroProduto2 = {}
    // cadastroProduto2.nome = 'celular';
    // cadastroProduto2.valor = 2500.00;
    // cadastroProduto2.marca = 'nokia';
    // cadastroProduto2.formaDePagamentoVista = 2300.00;
    // cadastroProduto2.formaDePagamentoParcelado = 2800.00;

    // console.log(cadastroProduto2);
    

    // // console.log(cadastroProduto, cadastroProduto2);
    // console.log(cadastroProduto2.nome);


//Funções

    // //Com retorno
    // function Somar (a, b){
    //     return a + b;
    // }

    // console.log(Somar(5,10));


    // //Sem retorno
    // function Multiplicar (a,b){
    //     console.log(a *b);
    // }
    // Multiplicar(2,5);

    // //Função anônima
    // const some = function(a,b){
    //     console.log(a+b);
    // }

    // some(50,50);

    // //Arrow
    // const somase = (a, b) => {return a+ b};

    // console.log(somase(3,3));

//Math
    //Notação ponto
    // console.log(Math.ceil(5.2)); //Para cima
    // console.log(Math.floor(5.2)); //Para baixo
    // console.log(Math.random()); //Aleatório
    
//Null e Undefined

    // console.log(typeof null); //objeto
    // console.log(typeof undefined); //undefined


//Números

    // const numero = 10.1515165156;
    
    // console.log(numero.toFixed(2));  //Fixa casas decimais
    // console.log(numero.toString(2)); // converte em binário

//Operadores ariméticos

    // let a = 10;
    // let b = 2;
    //  //Soma
    // console.log(a + b);
    //  //Multiplicação
    //  console.log(a * b);
    //  //Subtração
    //  console.log( a - b);
    //  //Divisão
    //  console.log(a / b);
    //  //resto    
    //  console.log(a%b);

//Booleanos true / false 

    // let logico = true;
    // console.log(logico);

    // logico = false;
    // console.log(logico);

    // console.log(!!5); // Dupla negação é verdadeiro
    // console.log(!5) // negação é falso
    // console.log(!!'');  // falso
    // console.log(!!null);  // falso
    // console.log(!!undefined);  // falso

//Relacionais recebe= igual== identico===  maiorque>= menoque<= menor< maior> diferente != estritamente diferente!==

    // let a = '4'; //string
    // let b = 4; //numero

    // console.log(a > b); // false
    // console.log(a <b); // false
    // console.log(a >= b); //true
    // console.log(a <= b); // true
    // console.log(a == b); // true
    // console.log(a === b); // false
    // console.log(a != b); // false
    // console.log(a !== b); // true

//Atribuição
    // // += -= *= /= %= 

    // let a = 2;
    // console.log(a);
    // a++
    // console.log(a);
    // a--
    // console.log(a);

//Lógicos
    //     E &&
    //     OU ||
    //     XOU !=
    //     Negação !

    // function cadastro (cadastrado, ativo){
    //     const recebaNovidades = cadastrado && ativo;
    //     const telaDePromocao = cadastrado || ativo;
    //     const cadastreSe = cadastrado != ativo;
    //     const FacaParteDaFamilia = !recebaNovidades;

    //     return{recebaNovidades, telaDePromocao, cadastreSe, FacaParteDaFamilia}; //objeto para ser visualizado no console
    // }    

    // console.log(cadastro(true, true));
    // console.log(cadastro(true, false));
    // console.log(cadastro(false,false));
    // console.log*cadastro(false,true);

//string e template string

// let qualquer = 'palavra';

// console.log(qualquer.charAt(1)); //char no indice
// console.log(qualquer.charCodeAt(1)); // Pega o código 
// console.log(qualquer.indexOf('p')); // descobri o indice 
// console.log(qualquer.substring(2,7)); //escolhe os indices que vai mostrar
// console.log(qualquer.replace('a', 'y')); //substitui
// console.log(qualquer.toUpperCase()); //maiusculo


// function notaAluno (nota){
//     if(nota >= 7){
//         console.log(`Aluno aprovado ${nota}`);
//     }
// }

// notaAluno(8.2);
//Unários

//ternários



//Destructuring


//Estrutura de Controle If, Else, FOR

//Tratando erro 


