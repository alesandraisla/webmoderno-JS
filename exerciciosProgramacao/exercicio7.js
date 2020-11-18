/*
Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) 
e retorne se o parâmetro numero (o primeiro) está entre minimo e maximo. 
Quando o parâmetro inclusivo for true, tenha "entre" como inlusivo, ou seja, 
considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo.
*/

function estaEntre (numero, minimo, maximo, inclusivo = false){
    
    if(inclusivo && (numero >= minimo && numero <= maximo)){
        return true
    } else if (!inclusivo && (numero > minimo && numero < maximo)) {
        return true;
    }

    return false;
}


console.log(estaEntre(10,1,10))
console.log(estaEntre(10,1,10, true))
