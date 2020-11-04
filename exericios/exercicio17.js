/*17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function salarioDoFuncionario(plano, salario){

    let bonus = 0;
    switch(plano){
        case 'a':
           return (bonus = salario * (10/100)),
                        (bonus += salario);
        case 'b':
            return (bonus = salario * (15/100)),
                    (bonus += salario);
        case 'c':
            return (bonus = salario * (20/100)),
                    (bonus += salario);
        default:
            return `Plano inválido.`        
    }   
}

console.log(salarioDoFuncionario('a', 1200) == 1320) //teste
console.log(salarioDoFuncionario('a', 1200)) 
console.log(salarioDoFuncionario('b', 1200) == 1380) //teste
console.log(salarioDoFuncionario('b', 1200)) 
console.log(salarioDoFuncionario('c', 1200) == 1440 ) //teste
console.log(salarioDoFuncionario('c', 1200))
console.log(salarioDoFuncionario('d', 1200))

