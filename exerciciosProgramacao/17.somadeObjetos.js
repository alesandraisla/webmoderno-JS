/*
Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
está desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas
*/
//function factory


const despesa1 = despesasTotais('Jornal online', 'Informação', 89.99)
const despesa2 = despesasTotais('Cinema', 'Entretenimento', 150)
const despesa3 = despesasTotais('Galaxy S20', 'Eletrônicos', 3599.99)
const despesa4 = despesasTotais('Macbook Pro', 'Eletrônicos', 30999.90)

function despesasTotais(nomeDaDespesa, categoria, preco){
    return {
        nomeDaDespesa,
        categoria,
        preco,
        getPreco(){
            return `Retornará ${(despesa1.preco) + (despesa2.preco)}`;
        },
        getPreco2(){
             return `Retornará ${(despesa3.preco) + (despesa4.preco)}`;             
        }
    }
}

console.log(despesa1.getPreco(), despesa3.getPreco2())
