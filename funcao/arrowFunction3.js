// This nesse contexto mexe no escopo global
let comparaComThis = function(param){
    console.log(this === param);
}
comparaComThis(global); //verdadeiro
comparaComThis(this) //falso o this nao é o this 


//This apontará para o objeto
const obj = {}
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);  //falso
comparaComThis(obj); // verdadeiro

//this em uma função arrow é um this associado ao contexto na qual a função foi escrita. NÃO TEM VARIAÇÃO.
//aponta para o objetivo, função foi definida dentro do modulo, então o this não estará no contexto global 
let comparaComThisArrow = param => console.log(this == param)
comparaComThisArrow(global); // falso
comparaComThisArrow(module.exports) // verdadeiro
comparaComThisArrow(this) // verdadeiro

comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj); // falso 
comparaComThisArrow(module.exports)// verdadeiro aponta pro objeto 
