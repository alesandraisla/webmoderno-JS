/*
15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.
*/

function concessionariaDeAutomoveis(automovel){

    switch(automovel){
        case 'hatch':
            console.log(`Automóvel escolhido foi ${automovel}. Compra efetuada com sucesso!`);
            break;
        case 'sedans':
            console.log(`Automóvel escolhido foi ${automovel}. Tem certeza que não prefere este modelo?`);
            break;
        case 'motocicletas':
            console.log(`Automovel escolhido foi ${automovel}. Tem certeza que não prefere este modelo?`);
            break;
        case 'caminhonetes':
            console.log(`Automóvel escolhido foi ${automovel}. Tem cereteza que não prefere este modelo?`);
            break;
         default:
             console.log(`Não trabalhamos com este tipo de automóvel aqui. ${automovel}.`);
             break;           

    }
    return ('-------------------------------------------------------------------------------------')
}

console.log(concessionariaDeAutomoveis('hatch'));
console.log(concessionariaDeAutomoveis('sedans'));
console.log(concessionariaDeAutomoveis('motocicletas'));
console.log(concessionariaDeAutomoveis('caminhonetes'));
console.log(concessionariaDeAutomoveis('bicicletas'));