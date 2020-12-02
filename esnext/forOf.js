//Intera em cima de valores 
for(let letra of "Cod3r") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

//Percorre em cima de indices
for(let i in assuntosEcma) {
    console.log(i) 
}

for(let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false}]
])

//Imprimir a chave e valor
for(let assunto of assuntosMap) {
    console.log(assunto)
}

//Imprimir apenas as chaves
for(let chave of assuntosMap.keys()) {
    console.log(chave)
}

//Imprimir apenas os valores
for(let valor of assuntosMap.values()) {
    console.log(valor)
}

//Destruturando chave e valor para imprimir separados
for(let [chave, valor] of assuntosMap.entries()) {
    console.log(chave, valor)
}

const s = new Set (['a', 'b', 'c'])
for(let letra of s) {
    console.log(letra)
}

