const aprovados = ['Lara', 'Suzany', 'Beatriz', 'Cloud', 'Nicolas']

//percorrer passando uma callkback 
// 1 parametro é o nome
// 2 parametro é indice
// 3 parametro é array 
//pode suprimir quantos parametros queira 

aprovados.forEach(function(nome, indice, array){
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)