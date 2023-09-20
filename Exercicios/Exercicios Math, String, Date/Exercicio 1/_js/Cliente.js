export default class Cliente{
    #nomeCompleto
    #dataNascimento

    constructor(nomeCompleto, dataNascimento){
        this.#nomeCompleto = nomeCompleto;
        this.#dataNascimento = new Date (dataNascimento);
    }

    calcularIdade() {
        let dataAtual = new Date();
        let anoAtual = dataAtual.getFullYear();
        let anoNascimento = this.#dataNascimento.getFullYear();
        return anoAtual - anoNascimento;
    }

    obterPrimeiroNome() {
        let partesNome = this.#nomeCompleto.split(' ');
        if (partesNome.length > 0) {
            return partesNome[0];
        } else {
            return this.nomeCompleto;
        }
    }

    saudacaoPersonalizada() {
        let primeiroNome = this.obterPrimeiroNome();
        let idade = this.calcularIdade();
        console.log(`Olá, ${primeiroNome}! Você tem ${idade} anos.`);
    }


}