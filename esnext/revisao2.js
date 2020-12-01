//Função arrow (anônimas)
//Se colocar um corpo {} precisa incluir o return

// const somar = (a,b) => a + b;
const somar = (a,b) => {
    return a + b;
};
console.log(somar(2,5))


// Arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()


//Parametro default
function log(texto = 'Node') {
    console.log(texto)
}

log() //asumirá o valor padrão
log(undefined) //asumirá o valor padrão
log(null) //nulo
log('Sou mais forte')


//Operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2, 3, 4, 5))

