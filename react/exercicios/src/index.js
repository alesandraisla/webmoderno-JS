import React from 'react'
import ReactDOM from 'react-dom'

// import BomDia from './componentes/BomDia'

// Componentes individuais
// import { BoaTarde, BoaNoite} from './componentes/Multiplos'

// ReactDOM.render(
//     <div>
//         <BoaTarde nome="Ana" />
//         <BoaNoite nome="Bia" />
//     </div>
// , document.getElementById('root'))

// Componentes em conjunto
// import Multi from './componentes/Multiplos'

// ReactDOM.render(
//     <div>
//         <Multi.BoaTarde nome="Ana" />
//         <Multi.BoaNoite nome="Bia" />
//     </div>
// , document.getElementById('root'))

import Saudacao from './componentes/Saudacao'

ReactDOM.render(
    <div>
        <Saudacao tipo="Bom dia" nome="Suzy" />
    </div>
, document.getElementById('root'))





// Pode colocar qualquer nome no import "primeiro". A primeira letra tem que ser maiuscula
// import Primeiro from './componentes/Primeiro'


// const elemento = <h1> React2 </h1>
// ReactDOM.render(elemento, document.getElementById('root'))


// ReactDOM.render(<BomDia />, document.getElementById('root'))

// Se quiser colocar uma propriedade para aparecer na tela, coloca em nome, idade, booleano
// ReactDOM.render(<BomDia nome="Barbie" idade={20} />, document.getElementById('root'))

// $('<h1>').html('React 2')
