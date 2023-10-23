import Turma from "./Turma.js";
import Aluno from "./Aluno.js";

const turma = new Turma('Turma A');

document.getElementById('butao').addEventListener("click",function adicionarAluno() {
  
    const nomeAluno = document.getElementById('nomeAluno').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const nota = parseFloat(document.getElementById('nota').value);
    
    const aluno = new Aluno(nomeAluno, dataNascimento, nota);
    turma.adicionarAluno(aluno);
  
    document.getElementById('nomeAluno').value = '';
    document.getElementById('dataNascimento').value = '';
    document.getElementById('nota').value = '';
  })

  document.getElementById('butao').addEventListener("click",function exibirDetalhesTurma() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';
  
    turma.exibirDetalhesTurma();
  
    const mediaTurmaDiv = document.createElement('div');
    mediaTurmaDiv.textContent = 'Média da Turma: ' + turma.calcularMediaTurma().toFixed(2);
    resultadoDiv.appendChild(mediaTurmaDiv);
  })
