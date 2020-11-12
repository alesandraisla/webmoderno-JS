const sequencia = {
    _valor: 1, // convenção que é uma variavel para acessar internamente 
    get valor(){ return this._valor++},
    set valor(valor) { //validação atribuir 
        if(valor > this._valor){
            this._valor = valor
        }
    } 
}


console.log(sequencia.valor, sequencia.valor, sequencia.valor);
console.log(sequencia._valor, sequencia._valor);
sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor, sequencia.valor);
sequencia.valor= 900; // Por conta da validaçao do set o JS não permite valor menor que o anterior
console.log(sequencia.valor, sequencia.valor)