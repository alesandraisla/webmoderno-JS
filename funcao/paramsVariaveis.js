//arguments -> recupera parametros 

function soma(){
    let soma = 0;
    for (i in arguments){
        soma += arguments[i];
    }
return soma;
}

console.log(soma());
console.log(soma(5));
console.log(soma(9,2,8)); 
console.log(soma('a', 'b', 5));
console.log(soma(6,'a', 'b'));