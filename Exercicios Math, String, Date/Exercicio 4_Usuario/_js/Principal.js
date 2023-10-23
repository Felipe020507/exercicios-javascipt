import Funcionario from "./Funcionario.js";

function interagirComUsuario(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const dataContratacao = document.getElementById('dataContratacao').value;
  const dataDemissao = document.getElementById('dataDemissao').value;
  const horasExtras = parseFloat(document.getElementById('horasExtras').value);
  const salario = parseFloat(document.getElementById('salario').value);

  const funcionario = new Funcionario(nome, dataContratacao, dataDemissao, horasExtras, salario);

  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = '';  // Limpa o conteúdo anterior

  const tempoTrabalho = funcionario.calcularTempoTrabalho();
  const salarioMensal = funcionario.calcularPagamentoMensal();

  const detalhesHTML = `
    <h2>Detalhes do Funcionário</h2>
    <p><strong>Nome:</strong> ${funcionario.nome}</p>
    <p><strong>Tempo na Empresa:</strong> ${tempoTrabalho.anosTrabalho} anos e ${tempoTrabalho.mesesTrabalho} meses</p>
    <p><strong>Salário Atual:</strong> R$ ${salarioMensal}</p>
    <p><strong>Data de Contratação:</strong> ${funcionario.dataContratacao.toLocaleDateString('pt-BR')}</p>
    <p><strong>Data de Demissão:</strong> ${funcionario.dataDemissao ? funcionario.dataDemissao.toLocaleDateString('pt-BR') : 'Atualmente empregado'}</p>
  `;

  resultadoDiv.innerHTML = detalhesHTML;
}

const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', interagirComUsuario);