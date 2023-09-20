// Professor.js
import Pessoa from "./Pessoa.js";

export default class Professor extends Pessoa {
    #especialidade;

    constructor(nome, idade, especialidade) {
        super(nome, idade);
        this.#especialidade = especialidade;
    }

    get getEspecialidade() {
        return this.#especialidade;
    }

    apresentar() {
        console.log(`Eu sou ${this.getNome} minha idade é ${this.getIdade} minha especialidade é ${this.getEspecialidade}`);
    }
}
