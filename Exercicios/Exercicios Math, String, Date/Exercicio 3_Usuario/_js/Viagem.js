export default class Viagem {
    #destino
    #dataPartida
    #dataRetorno
    #orcamento
    constructor(destino, dataPartida, dataRetorno, orcamento) {
      this.#destino = destino;
      this.#dataPartida = new Date(dataPartida);
      this.#dataRetorno = new Date(dataRetorno);
      this.#orcamento = orcamento;
    }
  
    calcularDuracao() {
      const diaMilissegundos = 1000 * 60 * 60 * 24;
      const tempoMilissegundos = this.dataRetorno - this.#dataPartida;
      return Math.ceil(tempoMilissegundos / diaMilissegundos);
    }
  
    verificarOrcamento(precoPassagem, precoHospedagem, precoAlimentacao) {
      const custoTotal = precoPassagem + precoHospedagem + precoAlimentacao;
      return this.#orcamento >= custoTotal;
    }
  
    exibirDetalhesViagem() {
      const duracaoViagem = this.calcularDuracao();
      const formattedPartida = this.#dataPartida.toLocaleDateString('pt-BR');
      const formattedRetorno = this.#dataRetorno.toLocaleDateString('pt-BR');
  
      console.log('Detalhes da Viagem:');
      console.log('Destino:', this.#destino);
      console.log('Duração da Viagem (dias):', duracaoViagem);
      console.log('Data de Partida:', formattedPartida);
      console.log('Data de Retorno:', formattedRetorno);
      console.log('Orçamento Disponível:', this.#orcamento.toFixed(2));
    }
  }