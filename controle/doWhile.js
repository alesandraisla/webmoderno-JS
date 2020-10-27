//Executa pelo menos uma vez 
//Expressão está depois do bloco

function getInteiroAleatorio (min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = -1;

do {
    opcao = getInteiroAleatorio (-1 ,10)
    console.log(`Opção escolhida foi ${opcao}. `);
} while (opcao != -1);



console.log('Até a próxima')