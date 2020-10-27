//Switch ->>>> multiplas seleções <<<<<-
// não é uma expressão relacional, ou seja, não retorna verdadeiro ou falso, tem um valor.
// pode ter multiplas sentenças dentro do case
//só irá sair do switch sem executar os demais cases, se colocar o nome break ao final de cada case
// break causa uma saída do bloco relacionado ao switch

const imprimirResultado = function(nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de honra')
            break;   
        case 8:
        case 7:
            console.log('Aprovado')
            break;
        case 6:
        case 5:
        case 4:
            console.log('Recuperação')
            break;
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado')
            break;         
        default:
            console.log('Nota inválida');                
    }
}

imprimirResultado(10);
imprimirResultado(8,7);
imprimirResultado(5);
imprimirResultado(3);
imprimirResultado(-3);