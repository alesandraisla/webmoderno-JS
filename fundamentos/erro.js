// try é um bloco de código que dentro dele coloca códigos passíveis de erro
// catch o erro automaticamente cairá dentro dele 
// throw (lançar) fica dentro de uma funcao que o catch chamará 
// finally é um bloco que  sempre será executado caindo no try ou nao 

// o erro foi em relação ao name e nome 

function tratarErroELancar(erro){
    //throw new Error('Ocorreu um erro no sistema.')//Colocar uma frase para o usuário visualizar o erro 
    //throw 10
    //throw true
   // throw 'Ocorrreu um erro '
   throw{
       nome: erro.name,
       msg: erro.message,  //criar um objeto com mais detalhes 
       date: new Date
   }
}



function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e) {
        tratarErroELancar(e);
    } finally{
        console.log('final');
    }
}

const obj = { nome: 'Javascript'}
imprimirNomeGritado(obj);