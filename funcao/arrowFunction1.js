let dobro = function (a){
    return 2 * a;
}

dobro = (a) => {
    return 2 * a;
}

dobro = a => 2 * a; //return implícito

console.log(dobro(Math.PI));



let ola = function(){
    return 'Olá';
}

ola = () => {
    return 'Olá';
}

ola = () => 'Olá'; // ou      ola = _ => 'Olá';
console.log(ola())



let coracao = function(){
    return 'amor maior';
}

coracao = () => {
    return 'amor maior';
}

coracao = () => 'amor maior';

console.log(coracao())
