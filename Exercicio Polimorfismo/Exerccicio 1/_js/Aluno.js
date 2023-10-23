// Aluno.js
import Pessoa from "./Pessoa.js";

export default class Aluno extends Pessoa {
    #numematricula;

    constructor(nome, idade, numematricula) {
        super(nome, idade);
        this.#numematricula = numematricula;
    }

    get getNumematricula() {
        return this.#numematricula;
    }

    apresentar() {
        console.log(`Eu sou ${this.getNome} minha idade e ${this.getIdade} meu número de matrícula é ${this.getNumematricula}`);
    }
}
