//contexto lexico -> da palavra, dento do codigo físico

function Pessoa(){
    this.idade = 0;


    setInterval(() => {
        this.idade++
        console.log(this.idade);
    }, 1000)

}

new Pessoa;