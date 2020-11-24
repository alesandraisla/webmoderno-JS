/*Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos
apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a
mesma.
Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam
cópias de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em
algumas situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.
Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o
nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a
propriedade especificada no segundo parâmetro.
*/
//for in key p acessar o objeto e pegar o valor if encontrar a key objeto valor


function removerPropriedade(objetoFiltrado, elementoAserRetirado){

    let novoObjeto = {}

    for (const atributo in objetoFiltrado) {
        novoObjeto[atributo] = objetoFiltrado[atributo]
    }

    delete novoObjeto[elementoAserRetirado]

    return novoObjeto;
}

console.log(removerPropriedade({nome:'Suzy' , idade: 25, peso: 50}, "idade"))


let pessoa = {
    'nome': 'Mimi',
    "1": 15,
    'nome completo': 'mniasnidnida sinadinsai insid'
}

console.log(pessoa['nome completo'])
console.log(pessoa[1])
