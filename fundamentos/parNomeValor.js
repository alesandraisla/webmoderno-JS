//par nome/valor
const saudacao = "Olá" // contexto léxico 1

function exemplo(){
    const saudacao = "Como você está?"
    return saudacao;
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Lara',
    idade: 30,
    peso: 60,
    endereco: {
        logradouro: 'Rua do encanto',
        numero: 115
    }
}

console.log(saudacao);
console.log(exemplo());
console.log(cliente);