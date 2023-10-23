import Livro from './Livro.js';
import Biblioteca from './Biblioteca.js';

const biblioteca = new Biblioteca('Minha Biblioteca');

document.getElementById('butao').addEventListener("click",function adicionarAluno() {

    
        const titulo = document.getElementById('titulo').value;
        const autor = document.getElementById('autor').value;
        const anoPublicacao = document.getElementById('ano').value;
        const quantidadeEstoque = document.getElementById('quantidade').value;
    
        const livro = new Livro(titulo, autor, anoPublicacao, quantidadeEstoque);
        this.biblioteca.adicionarLivro(livro);
        this.atualizarListaLivros();
      

        document.getElementById('adicionarLivro').addEventListener('click', () => {
          main.adicionarLivro();
        });


})