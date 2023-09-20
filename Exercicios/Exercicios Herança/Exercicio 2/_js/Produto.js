export default class Produto{
    #nome;
    #preco
    #codigoidentificacao
    #quantidade


    constructor(nome, preco, codigoidentifcacao, quantidade){
        this.#nome = nome
        this.#preco = preco
        this.#codigoidentificacao = codigoidentifcacao
        this.#quantidade = quantidade
    }

    get getNome(){
        return this.#nome
    }

    get getPreco(){
        return this.#preco
    }

    get getCodigoidentificacao(){
        return this.#codigoidentificacao
    }

    get getQuantidade(){
        return this.#quantidade
    }


    informacao(){
        console.log("Nome do porduto e " + this.getNome +  "O codigo e " + this.getCodigoidentificacao + "A quantidade e " + this.getQuantidade)
    }
}

