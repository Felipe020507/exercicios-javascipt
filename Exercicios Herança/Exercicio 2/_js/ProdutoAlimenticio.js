import  Produto  from "./Produto.js"

export default class ProdutoAlimenticio extends Produto{
    #datavalidade

    constructor(nome, preco, codigoidentifcacao, quantidade,datavalidade){
        super(nome, preco, codigoidentifcacao, quantidade)
        this.#datavalidade = datavalidade
    }


    get getDatavalidade(){
        return this.#datavalidade
    }

    informacao(){
        super.informacao();
        console.log("A data de validade e " + this.getDatavalidade)
    }
}