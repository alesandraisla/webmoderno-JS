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

// bind -> Amarra o objeto para resolver o this, dono da execução sempre que o método for chamado
const falarDePessoa = pessoa.falar.bind(pessoa);  
falarDePessoa();
