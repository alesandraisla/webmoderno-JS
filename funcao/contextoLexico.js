//função carrega consigo o local onde foi definida então procura dentro do escopo global

const valor = 'global';

function minhafuncao(){
    console.log(valor);
}

function executar(){
    const valor = 'local';
    minhafuncao()
}

executar();