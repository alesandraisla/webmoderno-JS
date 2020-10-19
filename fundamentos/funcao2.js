//função anônima -> Armazena uma função em variável/const

const imprimirSoma = function (a,b){
    console.log(a + b);
}

imprimirSoma(2,3);

console.log("******************************************************************");

// Armazenando uma função arrow em uma variável

const soma = (a, b) => {
    return a +b;
}

console.log(soma(2,3));

// Retorno implícito

const subtracao = (a, b) => a - b;
console.log(subtracao(3,2));

/*
* Variável pode ser global, ou seja, até mesmo dentro do bloco de código que não seja dentro da função 
*(tudo declarado será visivel globalmente) único problema é sobrescrever o valor
* e escopo de função (ficará visivel apenas na função)
*/

{
    {
        {
            {
                var escopo = "Olá tudo bem?";
                console.log(escopo);
            }
        }
    }
}
console.log(escopo);

function dentroDoEscopo(){
    var exemplo = "Boa noite";
    console.log(exemplo);
}

dentroDoEscopo();

