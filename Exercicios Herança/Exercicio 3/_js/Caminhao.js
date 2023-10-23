import Veiculo from "./Veiculo.js";

export default class Caminhao extends Veiculo {
    #capacidadecarga

    constructor(marca, modelo, anodefabricacao, capacidadecarga) {
        super(marca, modelo, anodefabricacao)
        this.#capacidadecarga = capacidadecarga
    }

    get capacidaedecarga(){
        return this.#capacidadecarga
    }

    informacao(){
        super.informacao()
        console.log("Capacidade de carga " + this.#capacidadecarga)
    }
    
}