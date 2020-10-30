// Estratégia 1 para gerar valor padrão ; serve para variaveis 

function somar(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c;
}


console.log(somar());  
console.log(somar(3));
console.log(somar(1,2,3));
console.log(somar(0,0,0)); //Não dará certo, pois vai para 1


// Estratégia 2, 3, 4 para gerar valor padrão

function somar2(a,b,c){
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1; // se existir  é 1 pois é o indice do b, se fosse no a seria 0 e no c seria 2
    c = isNaN(c) ? 1 : c;  //não é um numero  , técnica mais segura
    return a + b + c;
}

console.log(somar2());
console.log(somar2(2));
console.log(somar2(3, 2, 'oi'));
console.log(somar2('oi', 2, 3));  //vai imprimir a string  
console.log(somar2(3, 'oi', 3)); //vai imprimir a string 
console.log(somar2(0,0,0));  //reconhece o zero 
console.log(somar2(1,2,3));


// valor padrão do es2015 (Recurso mais novo)

function somar3(a=1, b=1, c=1){
    return a + b + c;
}

console.log(somar3());
console.log(somar3(2));
console.log(somar3(2,2,2));
console.log(somar3('ola', 2, 3));
console.log(somar3(2,'ola', 5));
console.log(somar3(3,3,'ola'))