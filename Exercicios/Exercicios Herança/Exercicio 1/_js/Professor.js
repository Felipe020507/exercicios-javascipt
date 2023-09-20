import Pessoa from "./Pessoa.js"

export default class Professor extends Pessoa {
    
    #disciplina
    #nota

    constructor(primeiroNome, segundoNome, idade, interesses, disciplina, nota) {
        super(primeiroNome, segundoNome, interesses, idade)
        this.#disciplina = disciplina
        this.#nota = nota
    }

    get getnota() {
        return this.#nota
    }

    get getdisciplina() {
        return this.#disciplina
    }

    saudacao() {
        super.saudacao();
        console.log("Minha disciplina é :" + this.getdisciplina)
        console.log("Minha nota é " + this.#nota)
    }

}