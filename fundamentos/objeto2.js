console.log(typeof Object);    //função
console.log(typeof new Object);  //instância da função será objeto

const Cliente = function(){}
console.log(typeof Cliente);   //funcção

console.log(typeof new Cliente);

class Produto {}
console.log(typeof Produto);  //funcção
console.log(typeof new Produto());

    