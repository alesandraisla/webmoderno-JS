import React from 'react'
import ReactDOM from 'react-dom'

import BomDia from './componentes/BomDia'


// Pode colocar qualquer nome no import "primeiro". A primeira letra tem que ser maiuscula
// import Primeiro from './componentes/Primeiro'


// const elemento = <h1> React2 </h1>
// ReactDOM.render(elemento, document.getElementById('root'))


// ReactDOM.render(<BomDia />, document.getElementById('root'))

// Se quiser colocar uma propriedade para aparecer na tela, coloca em nome
ReactDOM.render(<BomDia nome="Barbie" idade={20} />, document.getElementById('root'))

// $('<h1>').html('React 2')
