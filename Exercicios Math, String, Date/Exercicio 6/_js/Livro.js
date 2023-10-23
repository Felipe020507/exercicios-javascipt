export default class Livro {
    #titulo
    #autor
    #anodepublicacao
    #quantidadeEstoque

    constructor(titulo, autor, anodepublicacao, quantidadeEstoque) {
        this.#titulo = titulo;
        this.#autor = autor;
        this.#anodepublicacao = new Date(anodepublicacao);
        this.#quantidadeEstoque = quantidadeEstoque;
    }


    calcularAno() {
        const dataAtual = new Date();
        const datapublicacao = this.#anodepublicacao.getFullYear();
        const anoAtual = dataAtual.getFullYear();
        return anoAtual - datapublicacao;

    }


    exibirdetalhesLivro() {
        const ano = this.calcularAno();
        console.log('Detalhes do Livro:');
        console.log('Titulo', this.getTitulo)
        console.log('Autor:', this.getAutor);
        console.log('Ano de Publicação:', ano);
        console.log('Quantidade no Estoque:', this.getQuantidadeEstoque);
    }

    //Metodo Gets e Sets

    get getTitulo() {
        return this.#titulo
    }

    get getAutor() {
        return this.#autor
    }

    get getAnodepublicacao() {
        return this.#anodepublicacao
    }

    get getQuantidadeEstoque() {
        return this.#quantidadeEstoque

    }


}