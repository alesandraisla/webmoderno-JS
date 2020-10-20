//Declarar o mesmo var no global e dentro do escopo irá sobrescrever 

var exemplo = 1;

{
    var exemplo = 5;
    console.log("dentro", exemplo);

}

console.log("fora", exemplo);

let question = 1;

{
    let question = 10;
    console.log("dentro do escopo", question);
}

console.log("fora no global", question);