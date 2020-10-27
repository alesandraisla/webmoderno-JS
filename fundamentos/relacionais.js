// = atribuição |         == relacional compara iguadade entre duas coisas ex valor |   === identico (tipo)
// != diferente   |!== estritamente diferente

console.log('01)', '1' == 1); // verdade
console.log('02)', '1' === 1); // falso
console.log('03)', '3' != 3); // falso
console.log('04)', '3' !== 3); // verdade

console.log('05)', 3 < 2); // falso
console.log('06)', 3 > 2); // verdadeiro
console.log('07)', 3 <= 2); // falso
console.log('08)', 3 >= 2); // verdadeiro

const d1 = new Date(0);
const d2 = new Date(0);
//Endereço de memória não faz diferença, pois dará falso
console.log('09)', d1 === d2); // falso
console.log('10)', d1 == d2); // falso
console.log('11)', d1.getTime() === d2.getTime()); // verdadeiro
console.log('12)', d1.getTime() == d2.getTime()); // verdadeiro

console.log('13)', undefined == null); //verdadeiro
console.log('14)', undefined === null); // falso
