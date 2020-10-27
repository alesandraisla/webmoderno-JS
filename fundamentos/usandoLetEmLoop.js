// a variável i só estará vísivel dentro do bloco for 

for(let i = 0; i < 10; i++){
    console.log(i);

}

console.log("i =", i); //Não está visível 


//Existe a memória por ser um let de escopo de bloco, os valores estarão presentes
const exemplo2 = [];

for(let i =0; i < 10; i++){
    exemplo2.push(function(){
        console.log(i);
    })
}

exemplo2[2]();
exemplo2[8]();