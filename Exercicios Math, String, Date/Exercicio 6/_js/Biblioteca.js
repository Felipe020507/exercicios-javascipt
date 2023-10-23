// Biblioteca.js
export default class Biblioteca {
    #nomeBiblioteca
    #livros

    
    constructor(nomeBiblioteca) {
      this.#nomeBiblioteca = nomeBiblioteca;
      this.#livros = [];
    }
  
    adicionarLivro(livro) {
      this.#livros.push(livro);
    }
  
    removerLivro(tituloLivro) {
      this.#livros = this.#livros.filter(livro => livro.titulo !== tituloLivro);
    }
  
    exibirDetalhesBiblioteca() {
      console.log(`Nome da Biblioteca: ${this.#nomeBiblioteca}`);
      console.log(`Quantidade total de livros: ${this.#livros.length}`);
      console.log('Detalhes dos Livros:');
      this.#livros.forEach(livro => {
        livro.exibirDetalhesLivro();
      });
    }
  }