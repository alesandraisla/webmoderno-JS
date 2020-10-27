function soBoaNoticia (nota){
    if(nota >= 7){
        console.log(' Aluno aprovado! ' + nota);
    }
}

soBoaNoticia(8.1);
soBoaNoticia(5.0);

function seForVerdadeFalo (valor){
    if(valor){
        console.log('É verdade... ' + valor);
    }
}

seForVerdadeFalo(); //falso
seForVerdadeFalo(null); //falso
seForVerdadeFalo(undefined); //falso
seForVerdadeFalo(NaN); //falso
seForVerdadeFalo(''); //falso
seForVerdadeFalo(0); //falso
seForVerdadeFalo(-1);
seForVerdadeFalo(true);
seForVerdadeFalo(' ');
seForVerdadeFalo('?');
seForVerdadeFalo([]);
seForVerdadeFalo([1,2]);
seForVerdadeFalo({});