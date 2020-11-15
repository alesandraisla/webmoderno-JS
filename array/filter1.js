/*filter
A filtragem dos elementos será ou igual que o array ou menor.

*/

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false}
]

// console.log(produtos.filter(function(p){
//   return p.preco > 500 && p.fragil === true;
// }))

//Métodos encadeados


const produtoCaro = produto => produto.preco > 500;
const fragil = produto => produto.fragil;

const resultado = produtos.filter(produtoCaro).filter(fragil);

console.log(resultado)