//callback -> chamar de volta 
//passar uma função p/ outra função e quando um determinado evento acontecer essa função que passou será chamada de volta.
//evento é cada um dos elementos percorridos do array 

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir);
fabricantes.forEach(function(fabricante){
    console.log(fabricante);
})

//ou
//fabricantes.forEach(fabricante => console.log(fabricante))



const games = ['Tomb Raider', 'The sims', 'Dance evoluction', 'Final fantasy'];

const imprimaTudo = (jogo, lista) => {
    console.log(`${lista + 1}. ${jogo}`)
}

games.forEach(imprimaTudo);
