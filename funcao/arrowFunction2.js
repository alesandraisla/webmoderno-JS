//contexto lexico -> na palavra, dento do local físico
//this não vai variar, pois está dentro do arrow function

function Pessoa(){
    this.idade = 0;

    setInterval(() => {
        this.idade++
        console.log(this.idade);
    }, 1000) //intervalo que vai ficar repetindo a função
}

new Pessoa;