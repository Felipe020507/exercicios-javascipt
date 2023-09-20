class Aluno {
    #nome;
    #idade;
    #numero;

    constructor(nome, idade, numero) {
        this.#nome = nome;
        this.#idade = idade;
        this.#numero = numero
    }

    get idade() {
        return this.#idade;
    }
    set idade(idade) {
        this.#idade = idade;
    }

    get numero() {
        return this.#numero;
    }
    set numero(numero) {
        this.#numero = numero;
    }

    get nome() {
        return this.#nome;
    }
    set nome(nome) {
        this.#nome = nome;
    }

    toString() {
        return `Aluno { nome: ${this.nome}, idade: ${this.idade}, numero: ${this.numero} }`;
    }
}

function exibir(){
    let dados = new Aluno('Felipe', 20, 134)
    document.write(dados);

}
