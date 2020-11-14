//Esta class será transformada em uma função construtora

class Lancamento {
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome, // adicionando ao objeto que esta sendo criado (instanciado) um novo atributo nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes,
        this.ano = ano,
        this.lancamentos = []
    }
    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0;
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor;
        })
        return valorConsolidado;
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento ('Luz', -220)
const roupa = new Lancamento ('Roupa', -320)
const alimentacao = new Lancamento ('Alimentação', -890)

const contas = new CicloFinanceiro (6,2018)

contas.addLancamentos(salario, contaDeLuz, roupa, alimentacao)

console.log(contas.sumario())