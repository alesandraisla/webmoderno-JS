//setInterval() -> dispara outra função a partir de um determinado intervalo que passou

// function Pessoa (){
//     this.idade = 0;
//     setInterval(function(){
//         this.idade++
//         console.log(this.idade)
//     }.bind(this), 1000)
// }

// new Pessoa

// ou

function Pessoa1(){
    this.idade = 0;

    const self = this  // não vai mudar 
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa1;

