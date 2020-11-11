/*
16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
*/

function simuladorDeCalculadora(numero1, operacao, numero2){
    switch (operacao){
        case '+':
            return (numero1 + numero2);
        case '-':
            return (numero1 - numero2);
        case '*':
            return (numero1 * numero2);
        case '/':
            return (numero1 / numero2);
        default:
           return 'Operação inválida.'                
            // throw `Esta operação ${operacao} é inválida.`
    }
}

console.log(simuladorDeCalculadora(2,'+', 8) == 10)
console.log(simuladorDeCalculadora(2,'+', 8) )
console.log(simuladorDeCalculadora(8, '-', 2) == 6)
console.log(simuladorDeCalculadora(8, '-', 2) )
console.log(simuladorDeCalculadora(2, '*', 8) == 16);
console.log(simuladorDeCalculadora(2, '*', 8) );
console.log(simuladorDeCalculadora(8, '/', 2) == 4);
console.log(simuladorDeCalculadora(8, '/', 2) );
console.log(simuladorDeCalculadora(8, '%', 2));
