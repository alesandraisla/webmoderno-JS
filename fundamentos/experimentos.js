var a = 123;

console.log(module.exports.a);

let b = 555;

console.log(module.exports.b);

const c = 15;

console.log(module.exports.c);

this.d = 15;
this.e = 20;

console.log(module.exports.d);
console.log(module.exports === this); // true
console.log(module.exports); // exportará todos os this



