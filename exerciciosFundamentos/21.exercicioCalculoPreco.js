/*
21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
1) crianças com menos de 10 anos pagam R$80;
 2) conveniados com idade entre 10 e 30 anos pagam R$50; 
 3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95; e
 4) conveniados acima de 60 anos pagam R$130
*/

function tabelaPlanoDeSaude (idade){
    
let ValorFixo = 100;

if(idade > 0  && idade < 10){
    return (ValorFixo += 80);
} else if (idade >=10 && idade <= 30){
    return (ValorFixo += 50);
} else if (idade > 30 && idade <= 60){
    return (ValorFixo += 95);
} else if (idade > 60){
    return (ValorFixo += 130);
} 
return `Informe a idade correta`

}
console.log(tabelaPlanoDeSaude(8) == 180)
console.log(tabelaPlanoDeSaude(15) == 150)
console.log(tabelaPlanoDeSaude(30) == 150)
console.log(tabelaPlanoDeSaude(60) == 195)
console.log(tabelaPlanoDeSaude(61) == 230)
console.log(tabelaPlanoDeSaude(-1))