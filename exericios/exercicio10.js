/*
10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.

*/


function calcule (x){
    if(x % 3){
        return true;
    } 
        return false;
    
}

console.log(calcule(2));
console.log(calcule(8));
console.log(calcule(5));
console.log(calcule(3));
console.log(calcule(9));
console.log(calcule(6));
