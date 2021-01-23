import React from 'react'

// TERCEIRA POSSIBILIDADE =============================================================================
// import React, { Fragment } from 'react'


// export default () => <h1>Bom dia Pessoas</h1>

// props => propriedade passada para o componente
// export default props => <h1>Bom dia {props.nome} {props.idade}</h1>


//Não pode a partir de um componente retornar duas tags, uma possibildade é envolver as tags na div (Segunda melhor forma)
// PRIMEIRA POSSIBILIDADE ==============================================================================
// export default props => 
//     <div>
//         <h1>Bom dia {props.nome}</h1>
//         <h2>Até breve!</h2>
//     </div>

// Outra forma de envolver sem renderizar com div e quebrar layout (Melhor forma)
// SEGUNDA POSSIBILIDADE ================================================================================

// export default props =>
//     <React.Fragment>
//         <h1>Bom dia {props.nome}</h1>
//         <h2>Até breve!</h2>
//     </React.Fragment>

// ou incluir o nome React no import de cima do React 
// TERCEIRA POSSIBILIDADE ===============================================================================

// export default props =>
//     <Fragment>
//         <h1>Bom dia {props.nome}</h1>
//         <h2>Até breve!</h2>
//     </Fragment>


//  Ou envolver em um Array, separados por virgula com key (Última opção)
// QUARTA POSSIBILIDADE ================================================================================== 

export default props => [
    <h1 key='h1'>Bom dia {props.nome}!</h1>,
    <h2 key='h2'>Até breve!</h2>
]
