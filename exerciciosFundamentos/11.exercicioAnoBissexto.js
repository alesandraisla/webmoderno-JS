/*
11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.
*/

function descobrirAnoBissexto(ano){
    if(ano <= 0){
      return false;
    }
    return (ano % 400) == 0 || (ano % 4) == 0 && (ano % 100) !=0;
  }

  /*
  Ou
 if (ano <= 0){
        return false
    } else if (ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    } else {
        return false
    }
  */
    
console.log(descobrirAnoBissexto(2013)) //falso
console.log(descobrirAnoBissexto(2012)) // verdadeiro
console.log(descobrirAnoBissexto(1997)) // falso
console.log(descobrirAnoBissexto(1900)) // falso
console.log(descobrirAnoBissexto(2000)) // veraddeiro
console.log(descobrirAnoBissexto(2020)) // verdadeiro

console.log(descobrirAnoBissexto(0)) // falso
console.log(descobrirAnoBissexto(4))  // verdadeiro
console.log(descobrirAnoBissexto(100)) // falso
console.log(descobrirAnoBissexto(400))  // verdadeiro
console.log(descobrirAnoBissexto(800))  // verdadeiro
console.log(descobrirAnoBissexto(2021)) // falso



