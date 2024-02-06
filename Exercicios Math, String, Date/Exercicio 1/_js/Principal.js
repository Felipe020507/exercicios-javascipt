import Viagem from "./Viagem.js";

function interagirComUsuario(event) {
  event.preventDefault();

  const destino = document.getElementById('destino').value;
  const dataPartida = document.getElementById('dataPartida').value;
  const dataRetorno = document.getElementById('dataRetorno').value;
  const orcamento = parseFloat(document.getElementById('orcamento').value);

  const viagem = new Viagem(destino, dataPartida, dataRetorno, orcamento);

  const precoPassagem = parseFloat(prompt('Digite o preço estimado da passagem:'));
  const precoHospedagem = parseFloat(prompt('Digite o preço estimado da hospedagem:'));
  const precoAlimentacao = parseFloat(prompt('Digite o preço estimado da alimentação:'));

  viagem.exibirDetalhesViagem();

  const orcamentoSuficiente = viagem.verificarOrcamento(precoPassagem, precoHospedagem, precoAlimentacao);

  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = orcamentoSuficiente
    ? 'A viagem está dentro do orçamento.'
    : 'A viagem está acima do orçamento.';
}

const viagemForm = document.getElementById('viagemForm');
viagemForm.addEventListener('submit', interagirComUsuario);