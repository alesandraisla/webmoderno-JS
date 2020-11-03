/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos
*/

//Juros simples
function jurosSimples (capitalInicial, TaxaDeJuros, TempoDeAplicacao){
    return capitalInicial * TaxaDeJuros * TempoDeAplicacao;
}

console.log("O juros simples é no valor de R$", jurosSimples(4000, 0.02, 24).toFixed(2))



//Juros composto
function jurosCompostos (capital, taxa, periodo){

    return capital * Math.pow(1 + taxa, periodo);
    
}

console.log("O montante é de ", jurosCompostos(1000, 0.10, 1).toFixed(2));
console.log("O montante é de ", jurosCompostos(1000, 0.10, 2).toFixed(2));
console.log("O montante é de ", jurosCompostos(1000, 0.10, 3).toFixed(2));
console.log("O montante é de ", jurosCompostos(8000, 0.012, 6 ).toFixed(2))
