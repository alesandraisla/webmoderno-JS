const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

//invocar função e objeto
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

// Exportou um objeto do node, o node faz cache, ou seja, então retornará sempre a mesma instância 
contadorA.inclementar()
contadorA.inclementar()
console.log(contadorA.valor, contadorB.valor) // 3, 3

//Novas instâncias criadas a partir de uma factory, neste caso o contador D não receberar o mesmo valor do contador C
contadorC.incrementar()
contadorC.incrementar()
console.log(contadorC.valor, contadorD.valor) // 3, 1