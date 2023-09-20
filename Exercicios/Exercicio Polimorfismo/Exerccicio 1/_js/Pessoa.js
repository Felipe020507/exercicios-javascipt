// Pessoa.js
export default class Pessoa {
    #nome;
    #idade;

    constructor(nome, idade) {
        this.#nome = nome;
        this.#idade = idade;
    }

    get getNome() {
        return this.#nome;
    }

    get getIdade() {
        return this.#idade;
    }

    apresentar() {
        console.log(`${this.#nome} meu nome, minha idade e ${this.getIdade}`);
    }
}
