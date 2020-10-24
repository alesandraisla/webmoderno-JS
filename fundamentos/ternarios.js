// três operandos    nota >= 7 ? 'Aprovado' : 'Reprovado';

//expressão relacional com função arrow implicito
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';

console.log(resultado(7.9));
console.log(resultado(6.8));


//função arrow
const resultado1 = nota =>{
    return nota >= 7 ? 'Aprovado' : 'Reprovado';
}

console.log(resultado1(8.0));



//função normal 
function resultado2(nota){
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}

console.log(resultado2(9.5));




const blogDeModa = cadastro => cadastro === 'Sim' || cadastro === 'Yes' ? 'Veja as novidades da semana!' : 'Cadastre seu email para receber promoções';

console.log("Você tem cadastro conosco?")
console.log(blogDeModa('Não'));
console.log(blogDeModa('Sim'));