let contador = 1; //declaração

while(contador <=10){ //expressão
    console.log(`Contador =  ${contador}`);
    contador++ //Se não colocar ficará contando 1 loop infinito //incremento
}

for(let i = 1; i <= 10; i++){
    console.log(`i  = ${i}`)
}

//length -> comprimento , tamanho do array 

const notas = [6.5, 7.1, 9.6, 8.9, 7.7];

for(let i = 0; i < notas.length; i++){
    console.log(`notas = ${notas[i]}`);
}

console.log(i); //colocando let no it não tera acesso fora do for 