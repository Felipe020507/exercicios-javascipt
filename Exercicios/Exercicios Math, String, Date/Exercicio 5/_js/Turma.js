import Aluno from "./Aluno.js";

export default class Turma {
    #nomeTurma
    #alunos
    
    constructor(nomeTurma) {
      this.#nomeTurma = nomeTurma;
      this.#alunos = [];
    }
  
    adicionarAluno(aluno) {
      this.#alunos.push(aluno);
    }
  
    removerAluno(nomeAluno) {
      this.#alunos = this.#alunos.filter(aluno => aluno.nome !== nomeAluno);
    }
  
    calcularMediaTurma() {
      if (this.#alunos.length === 0) {
        return 0;
      }
  
      const totalNotas = this.#alunos.reduce((total, aluno) => total + aluno.nota, 0);
      return totalNotas / this.#alunos.length;
    }
  
    exibirDetalhesTurma() {
      console.log('Detalhes da Turma:');
      console.log('Nome da Turma:', this.#nomeTurma);
      console.log('Média das Notas:', this.calcularMediaTurma());
  
      for (const aluno of this.#alunos) {
        aluno.exibirDetalhesAluno();
      }
    }
  }