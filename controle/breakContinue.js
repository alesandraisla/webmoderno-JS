// break -> não age em cima do  if, mas sim do bloco mais proximo do tipo fow, while e switch (desvio de flulxo para fora)
//continue -> interrompe a repetição atual e vai para a proxima

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


for(x in numeros){
    if(x == 5){
        break;
    }
    console.log( ` ${x} = ${numeros[x]}`);
}

console.log("Fim do laço");

for(y in numeros){
    if(y == 5){
        continue; 
    }
    console.log( ` ${y} = ${numeros[y]}`);
}

//rótulo
externo:
for(a in numeros){
    for(b in numeros){
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`);
    }
}
