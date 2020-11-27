const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') 


const chineses = funcionario => funcionario.pais === 'China'
const mulheres = funcionario => funcionario.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual;
}

//vai fazer uma requição do url e no final vai obter o conteudo do arquivo no código 
//Mostrará os primeiros cem elementos
axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

// mulher chinena com menor salário?

const func = funcionarios
.filter(chineses)
.filter(mulheres)
.reduce(menorSalario)

console.log(func)

})

