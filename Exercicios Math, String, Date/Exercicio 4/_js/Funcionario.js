export default class Funcionario {
    #nome
    #dataContratacao 
    #dataDemissao 
    #horasExtras
    #salario 

    constructor(nome, dataContratacao, dataDemissao, horasExtras, salario ){
        this.#nome = nome;
        this.#dataContratacao = dataContratacao;
        this.#dataDemissao = dataDemissao;
        this.#horasExtras = horasExtras;
        this.#salario = salario;
    }

    calcularTempoTrabalho() {
        let hoje = new Date();
        let tempoTrabalho;
    
        if (this.#dataDemissao) {
          tempoTrabalho = new Date(this.#dataDemissao - this.#dataContratacao);
        } else {
          tempoTrabalho = new Date(hoje - this.#dataContratacao);
        }
    
        let anos = tempoTrabalho.getUTCFullYear() - 1970;
        let meses = tempoTrabalho.getUTCMonth();
    
        return { anos, meses };
      }


      calcularPagamentoMensal() {
        const diasNoMes = 30;
        const salarioDiario = this.#salario / diasNoMes;
        const pagamentoHorasExtras = this.#horasExtras * salarioDiario;
        const salarioMensal = this.#salario + pagamentoHorasExtras;
        return parseFloat(salarioMensal.toFixed(2));
      }


      exibirDetalhesFuncionario() {
        const tempoTrabalho = this.calcularTempoTrabalho();
        const salarioMensal = this.calcularPagamentoMensal();
    
        const detalhes = `
          Nome: ${this.#nome}
          Tempo na Empresa: ${tempoTrabalho.anos} anos e ${tempoTrabalho.meses} meses
          Salário Atual: R$ ${salarioMensal.toFixed(2)}
          Data de Contratação: ${this.#dataContratacao.toLocaleDateString('pt-BR')}
          Data de Demissão: ${this.#dataDemissao ? this.#dataDemissao.toLocaleDateString('pt-BR') : 'Não definida'}
        `;
    
        console.log(detalhes);
      }


    getNome() {
        return this.#nome;
      }
    
      getDataContratacao() {
        return this.#dataContratacao;
      }
    

      getDataDemissao() {
        return this.#dataDemissao;
      }
    

      getHorasExtras() {
        return this.#horasExtras;
      }
    

      getSalario() {
        return this.#salario;
      }
    

     
    }