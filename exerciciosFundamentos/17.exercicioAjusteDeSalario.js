/*17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento A 10%, B 15%, C 20%. Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function ajusteDeSalario(plano, salarioAtual){
    let bonus = 0;
    switch(plano){
        case 'a':
            (bonus = salarioAtual * (10/100))
            return (bonus += salarioAtual);
        case 'b':
            (bonus = salarioAtual * (15/100))
            return (bonus += salarioAtual);
        case 'c':
            (bonus = salarioAtual * (20/100))
            return (bonus += salarioAtual);
        default:
            return `Plano inválido.`;
        /*
            switch (plano) {
    case 'A':
        return salarioAtual * 1.1
    case 'B':
        return salarioAtual * 1.15
    case 'C':
        return salarioAtual * 1.2
    default:
        return 'Plano inválido.'
    }
        */
    }   
}

console.log(ajusteDeSalario('a', 1200) == 1320) //teste
console.log(ajusteDeSalario('a', 1200)) 
console.log(ajusteDeSalario('b', 1200) == 1380) //teste
console.log(ajusteDeSalario('b', 1200)) 
console.log(ajusteDeSalario('c', 1200) == 1440 ) //teste
console.log(ajusteDeSalario('c', 1200))
console.log(ajusteDeSalario('d', 1200))


console.log(ajusteDeSalario('a', 1000))
console.log(ajusteDeSalario('b', 1000))
console.log(ajusteDeSalario('c', 1000))
console.log(ajusteDeSalario('d', 1000))
