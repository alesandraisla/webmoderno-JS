//Uma factory retorna uma nova instância

module.exports = () => {
    return {
        valor: 1,
        incrementar(){
            this.valor++
        }

    }
}