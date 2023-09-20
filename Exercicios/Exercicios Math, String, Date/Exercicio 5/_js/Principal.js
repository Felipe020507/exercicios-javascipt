import Turma from "./Turma.js";
import Aluno from "./Aluno.js";

const turma = new Turma('Turma A');

function adicionarAluno(event) {
    event.preventDefault();
  
    const nomeAluno = document.getElementById('nomeAluno').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const nota = parseFloat(document.getElementById('nota').value);
  
    // Check if nota is a valid number
    if (isNaN(nota) || nota < 0 || nota > 10) {
      alert('Por favor, insira uma nota válida entre 0 e 10.');
      return;
    }
  
    const aluno = new Aluno(nomeAluno, dataNascimento, nota);
    turma.adicionarAluno(aluno);
  
    // Limpar os campos do formulário
    document.getElementById('nomeAluno').value = '';
    document.getElementById('dataNascimento').value = '';
    document.getElementById('nota').value = '';
  }

function exibirDetalhesTurma() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';
  
    turma.exibirDetalhesTurma();
  
    const mediaTurmaDiv = document.createElement('div');
    mediaTurmaDiv.textContent = 'Média da Turma: ' + turma.calcularMediaTurma().toFixed(2);
    resultadoDiv.appendChild(mediaTurmaDiv);
  }


  window.exibirDetalhesTurma = exibirDetalhesTurma;