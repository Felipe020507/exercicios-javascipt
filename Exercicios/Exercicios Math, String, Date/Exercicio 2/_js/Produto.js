export default class Produto{
    #nome
    #preco
    #dataFabricacao
    #dataValidade

    constructor(nome, preco, dataFabricacao, dataValidade) {
        this.#nome = nome;
        this.#preco = preco;
        this.#dataFabricacao = new Date(dataFabricacao);
        this.#dataValidade = new Date(dataValidade);
    }

    estaVencido() {
        let dataAtual = new Date();
        return dataAtual > this.#dataValidade;
    }

    exibirInformacoes() {
        console.log(`Nome do Produto: ${this.#nome}`);
        console.log(`Preço: R$ ${this.#preco.toFixed(2)}`);
        console.log(`Data de Fabricação: ${this.formatarData(this.#dataFabricacao)}`);
        console.log(`Data de Validade: ${this.formatarData(this.#dataValidade)}`);
        if (this.estaVencido()) {
            console.log('Este produto está vencido.');
        } else {
            console.log('Este produto não está vencido.');
        }
    }

    formatarData(data) {
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
        const ano = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }
}


