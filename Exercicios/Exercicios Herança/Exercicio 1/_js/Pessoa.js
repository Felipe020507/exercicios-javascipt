export default class Pessoa {
    #nome
    #idade
    #interesses

    constructor(primeiroNome, segundoNome, idade, interesses) {
        this.#nome = {
            primeiro: primeiroNome,
            segundo: segundoNome,
        };
        this.#idade = idade
        this.#interesses = interesses
    }

    get getnome() { return this.#nome; }

    get getidade() { return this.#idade }

    get getinteresses() { return this.#interesses }


    saudacao() { console.log("Oi eu sou " + this.getnome.primeiro); }
    despedida() { console.log("Ate mais por enquanto") }


}




