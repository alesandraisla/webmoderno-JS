const quaseArray = { 0: 'Tidus', 1: 'Yuna', 2: 'Cloud'}
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Tidus', 'Yuna', 'Cloud']
console.log(quaseArray.toString(), meuArray)