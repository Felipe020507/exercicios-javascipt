export default class Funcionario {
  constructor(nome, dataContratacao, dataDemissao, horasExtras, salario) {
    this.nome = nome;
    this.dataContratacao = new Date(dataContratacao);
    this.dataDemissao = dataDemissao ? new Date(dataDemissao) : null;
    this.horasExtras = horasExtras;
    this.salario = salario;
  }

  calcularTempoTrabalho() {
    const dataAtual = new Date();
    const tempoMilissegundos = this.dataDemissao
      ? this.dataDemissao - this.dataContratacao
      : dataAtual - this.dataContratacao;

    const anosTrabalho = Math.floor(tempoMilissegundos / (365.25 * 24 * 60 * 60 * 1000));
    const mesesTrabalho = Math.floor((tempoMilissegundos % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));

    return { anosTrabalho, mesesTrabalho };
  }

  calcularPagamentoMensal() {
    const diasNoMes = 30;  // Considerando um mês com 30 dias
    const salarioMensal = this.salario / diasNoMes;
    const pagamentoHorasExtras = this.horasExtras * (salarioMensal / diasNoMes);
    const pagamentoTotal = salarioMensal + pagamentoHorasExtras;

    return parseFloat(pagamentoTotal.toFixed(2));
  }

  exibirDetalhesFuncionario() {
    const tempoTrabalho = this.calcularTempoTrabalho();
    const formattedContratacao = this.dataContratacao.toLocaleDateString('pt-BR');
    const formattedDemissao = this.dataDemissao ? this.dataDemissao.toLocaleDateString('pt-BR') : 'Atualmente empregado';

    console.log('Detalhes do Funcionário:');
    console.log('Nome:', this.nome);
    console.log('Tempo na Empresa:', `${tempoTrabalho.anosTrabalho} anos e ${tempoTrabalho.mesesTrabalho} meses`);
    console.log('Salário Atual:', `R$ ${this.calcularPagamentoMensal()}`);
    console.log('Data de Contratação:', formattedContratacao);
    console.log('Data de Demissão:', formattedDemissao);
  }
}