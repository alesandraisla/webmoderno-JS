const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log("Aluno aprovado! ");
    } else {
        console.log("Aluno reprovado! ");
    }
}

imprimirResultado(10);
imprimirResultado(5.2);
imprimirResultado('Epa'); // cuidado, pois dará reprovado!!!
imprimirResultado(8.5);

