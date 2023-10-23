export default class Viagem{
    #destino;
    #dataPartida;
    #dataRetorno;
    #orcamento;

    constructor(destino, dataPartida, dataRetorno, orcamento){
        this.#destino = destino
        this.#dataPartida = new Date (dataPartida);
        this.#dataRetorno = new Date (dataRetorno);
        this.#orcamento = parseFloat (orcamento) ;
    }


    calcularDuracao() {
        const tempo = Math.abs(this.#dataRetorno - this.#dataPartida);
        const dia = Math.ceil(tempo / (1000 * 60 * 60 * 24));
        return dia;
      }

    Orcamento(precoPassagem, precoHospedagem, precoAlimentacao){
        const custoTotal = precoPassagem + precoHospedagem + precoAlimentacao;
        const custoArredondado = parseFloat(custoTotal.toFixed(2));

        if(custoArredondado < this.#orcamento){
            return "A viagem esta dentro do orçamento pode viajar meu chapa"
        }
        else {
            return "A viagem não esta dentro do orçamento não pode viajar meu chapa"
        }
    }

    exibirDetalhesViagem(){
        const duracaoViagem = this.calcularDuracao();
        const dataPartidaFormatada = this.#dataPartida.toLocaleDateString('pt-BR');
        const dataRetornoFormatada = this.#dataRetorno.toLocaleDateString('pt-BR');
        const orcamentoFormatado = this.#orcamento.toFixed(2);

        return `
      Detalhes da Viagem:
      - Destino: ${this.#destino}
      - Duração da Viagem (dias): ${duracaoViagem}
      - Data de Partida: ${dataPartidaFormatada}
      - Data de Retorno: ${dataRetornoFormatada}
      - Orçamento Disponível: R$ ${orcamentoFormatado}
    `;
  }

  toString(){
    return this.exibirDetalhesViagem();
  }


    //Metodo Gets e Sets

    get getDestino(){
        return this.#destino
    }

    get getDataPartida(){
        return this.#dataPartida
    }

    get getDataRetorno(){
        return this.#dataRetorno
    }

    get getOrcamento(){
        return this.#orcamento
    }


}