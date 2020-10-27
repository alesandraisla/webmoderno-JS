// e             &&
// ou            ||
// xou     !!(^) bitwise xor     |         !=
// negação        !

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    //const comprarTv32 = !!(trabalho1 ^trabalho2) 
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete;     //operador unário

    // Objeto é uma coleção chave valor , pode omitir a chave caso tenha redundância 
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}


console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false,true));
console.log(compras(false, false));







