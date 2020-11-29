const schedule = require('node-schedule')

//* -->>> ignorar
// */5 -->> executar de x em x segundos 
// 19 --> horário
// 0 -->dias da semana
const tarefa1 = schedule.scheduleJob('*/5 * 19 * * 0', function() {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

//Temporizador padrão JS
setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelamento Tarefa 1!')
}, 20000)

//temporizador zerado setImmediate
// disparar uma função de tempo em tempo setInvertal


const regra = new schedule.RecurrenceRule()
regra.dayOfweek - [new schedule.Range(0,5)] //dia da semana
regra.hour = 19
regra.second =  30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})
