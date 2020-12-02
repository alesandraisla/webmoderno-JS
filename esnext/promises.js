//Promessa foi atingida ou rejeitada
//2 parâmetros um para ser resolvido e outro rejeitado 

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(frase)//Aceita apenas um único parâmetro
           // reject(frase)
        }, segundos * 1000)
    })
}

//then ->> pode encadear qts quiser, é chamada quando resolve a promise 
//catch ->> Para tratar o caso de erro
falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))