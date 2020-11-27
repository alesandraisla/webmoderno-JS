const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

//invocar função e objeto
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

// o node faz cache, ou seja, o que fizer no contador A o contador B também vai saber 
contadorA.inclementar()
contadorA.inclementar()
console.log(contadorA.valor, contadorB.valor)

//Novas instâncias criadas a partir de uma factory, neste caso o contador D não receberar o mesmo valor do contador C
contadorC.incrementar()
contadorC.incrementar()
console.log(contadorC.valor, contadorD.valor)