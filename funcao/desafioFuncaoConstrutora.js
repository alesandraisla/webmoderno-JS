function Pessoa(nome) {
    this.nome = nome;

    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
        //console.log(`Meu nome [e ${nome}`])
    }
}

const p1 = new Pessoa('Beatriz')
p1.falar()

