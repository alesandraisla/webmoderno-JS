//this -> acessar 

const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar(); //funciona por causa do this 
const falar = pessoa.falar;
falar () // conflito entre paradigmas: funcionar e Orientado a objetos retornará undefined 

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();
