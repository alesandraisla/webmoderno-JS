function area(largura, altura){
    const area = largura * altura;
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area;
    }
}

console.log('1',area(2,2));
console.log('2', area(2));
console.log('3', area());
console.log('4', area(2,3,17,22,44))
console.log('5', area(5,5));