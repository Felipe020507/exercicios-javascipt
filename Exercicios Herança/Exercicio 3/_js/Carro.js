import Veiculo from "./Veiculo.js"

export default class Carro extends Veiculo{
    #numeroportas

    constructor(marca, modelo, anodefabricacao,numeroportas){
        super(marca, modelo, anodefabricacao)
        this.#numeroportas = numeroportas
    }

    get numeroportas(){
        return this.#numeroportas
    }

    informacao(){
        super.informacao()
        console.log("O numero de portas e ", this.#numeroportas)
    }
}