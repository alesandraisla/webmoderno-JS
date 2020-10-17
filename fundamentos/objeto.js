//Objeto -> conjunto (coleção) de pares que é chave e valor

const produto1 = {}
produto1.nome = 'Notebook';
produto1.valor = 5999.00;
produto1['Desconto'] = 0.20;

console.log(produto1);


const produto2 = {
    nome: 'Tv ultima geração',
    valor: 8999.99,
    pagamentos:{
        vista: 7500.00,
        cartao: 8900.00,
        crediario: 8850.00

    }
}
console.log(produto2);

//Json -> formato textual para comunicação entre sistemas

'{"nome:" "Geladeira", "preco:" 79.90 }'

// const pessoa = {
//     nome: '',
//     nascimento: '',
//     cpf: '',
//     peso:'',
//     altura: '',
//     telefone: ,
//     endereço: {
//         logradouro: '',
//         cep: '',
//         cidade: '',
//         estado: '',
//     }
// }