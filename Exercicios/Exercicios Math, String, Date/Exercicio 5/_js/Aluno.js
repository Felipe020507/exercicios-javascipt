export default class Aluno {
    #nome
    #dataNascimento
    #nota

    constructor(nome, dataNascimento, nota) {
      this.#nome = nome;
      this.#dataNascimento = new Date(dataNascimento);
      this.#nota = nota;
    }
  
    calcularIdade() {
      const dataAtual = new Date();
      const anoNascimento = this.#dataNascimento.getFullYear();
      const anoAtual = dataAtual.getFullYear();
      return anoAtual - anoNascimento;
    }
  
    exibirDetalhesAluno() {
      const idade = this.calcularIdade();
      console.log('Detalhes do Aluno:');
      console.log('Nome:', this.#nome);
      console.log('Idade:', idade);
      console.log('Nota:', this.#nota);
    }

  }