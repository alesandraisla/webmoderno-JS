//fugir do escopo global, invoca imediatamente
// IIEF -> Immediately invoked function expression
//Não tocará no escopo global
//função anônima


(function(){

    //tudo que criar dentro da função será disponivel apenas nela
    console.log('Será executado na hora!');
    console.log('Foge do escopo mais abrangente')

})()
