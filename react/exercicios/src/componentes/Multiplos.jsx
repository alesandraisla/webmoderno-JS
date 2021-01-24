import React from 'react'

// Quando coloca default é uma função anônima
export const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1>

export const BoaNoite = props => <h1>Boa noite {props.nome}!</h1>

// export default BoaTarde

// Pode ser das duas formas
// export {BoaTarde, BoaNoite}
export default { BoaTarde, BoaNoite}