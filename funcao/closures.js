//Closure (envolve/ fechamento) é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função
//função lembra da sua origem, se foi declarada no escopo global ou se foi dentro de outra função.
//vai ter ciencia do local onde foi definida e vai acessar a variavel.
//Contexto léxico em ação!

const x = 'Global';

function fora(){
    const x = 'Local';
    function dentro(){
        return x;
    }
    return dentro;
}

const minhaFuncao = fora()
console.log(minhaFuncao())