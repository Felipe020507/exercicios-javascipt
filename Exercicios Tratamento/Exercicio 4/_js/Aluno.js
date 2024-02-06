export default class Aluno{
    #nome;
    #idade;
    #nromatricula
    #notas

    constructor(nome, idade, nromatricula, notas){
        this.#nome = nome;
        this.idade = idade;
        this.#nromatricula = nromatricula;
    }


    exibirDetalhesAluno(){
        console.log("Detalhes Aluno");
        console.log("Nome: ", this.getNome);
        console.log("Idade: ", this.getIdade);
        console.log("Numero Matricula: ", this.getNromatricula);
        console.log("Notas: ", this.getNotas);
        }



    //Metodo Gets e Sets

    get getNome(){
        return this.#nome;
    }

    get getIdade(){
        return this.#idade;
    }

    get getNromatricula(){
        return this.#nromatricula;
    }

    get getNotas(){
        return this.#notas
    }

}