// tagget templates - processa o template dentro de uma função

function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)

//Gerará dois arrays o de partes que é template string e valores que é o aluno e situação