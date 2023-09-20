import Produto from "./Produto.js"

export default class ProdutoEletronico extends Produto{
    #voltagem

    constructor(nome, preco, codigoidentifcacao, quantidade,voltagem){
        super(nome, preco, codigoidentifcacao, quantidade)
        this.#voltagem = voltagem
    }



    get getVoltagem(){
        return this.#voltagem
    }

    informacao(){
        super.informacao();
        console.log("A voltagem e " + this.getVoltagem)
    }

}