export default class Veiculo{
    #marca
    #modelo
    #anodefabricacao

    constructor(marca, modelo, anodefabricacao){
        this.#marca = marca
        this.#modelo = modelo
        this.#anodefabricacao = anodefabricacao
    }


    get marca(){
        return this.#marca
    }

    get modelo(){
        return this.#modelo
    }

    get anodefabricacao(){
        return this.#anodefabricacao
    }

    informacao(){
        console.log("A marca e " + this.#marca + "O modelo e " + this.#modelo + "O ano de fabricao e " + this.#anodefabricacao)
    }
}