/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos
*/

function jurosSimples (capitalInicial, taxaDeJuros, tempoDeAplicacao){
    return capitalInicial + (capitalInicial * taxaDeJuros * tempoDeAplicacao);
}

function jurosCompostos (capital, taxa, tempo){
    return capital * Math.pow(1 + taxa, tempo);
   //ou return capital * ( 1 + taxa) ** tempo;
}

console.log("R$", jurosSimples(100, 10/100, 2).toFixed(2))
console.log("R$", jurosCompostos(100, 10/100, 2).toFixed(2));
console.log("R$", jurosCompostos(1000, 10/100, 2).toFixed(2));
console.log("R$", jurosCompostos(1000, 10/100, 3).toFixed(2));
console.log("R$", jurosCompostos(8000, 1.2/100, 6 ).toFixed(2))
