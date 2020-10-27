

for(var i = 0; i < 10; i++){
    console.log(i);  //aparecer a contagem
}

console.log("i = ", i);  //Informará qual é o valor final da variável

const exemplo1 = [];

for(var i = 0; i <10; i++){
    exemplo1.push(function(){
        console.log(i);
    })
}

//Mostrará o mesmo resultado por ser var 
exemplo1[2]();
exemplo1[8]();

