import React, { Component } from 'react'

export default class Saudacao extends Component {

    // Para alterar os atributos (Estado)
    state = {
        // tipo: "Fala",
        // nome: "Suzy"
        tipo: this.props.tipo,
        nome: this.props.nome
       
    }

    // Criar uma função para o evento
    setTipo(e) {
        // console.log(e.target.value)
        // this.props.tipo = e.target.value
        this.setState({ tipo: e.target.value })
    }

    // setTipo(e) {
    //     let i = 1
    //     setInterval(() => {
    //         this.setState({ tipo: ++i})
    //     }, 1000)
    //     this.setState({ tipo: e.target.value })
    // }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    render() {
        const { tipo, nome } = this.state    //props
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={tipo} onChange={e => this.setTipo(e)}/>
                <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)}/>    
            </div>
        )
    }
}