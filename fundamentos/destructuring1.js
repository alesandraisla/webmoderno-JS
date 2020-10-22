// objeto -> chave/valor
const pessoa = {
    nome: 'Ana',
    idade: 15,
    endereco:  {
        logradouro: 'Rua do Brasil',
        numero: 1005
    }
 }

 //tire de dentro do objeto pessoa o atributo nome e idade 
 const {nome, idade} = pessoa;
 console.log(nome,idade);

 const{nome: n, idade: i} = pessoa;
 console.log(n, i);

 //Se não vier nada, por padrão aparecerá verdadeiro
 const {sobrenome, bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada);

const {endereco: {logradouro, numero, cep}} = pessoa;
console.log(logradouro, numero, cep);
