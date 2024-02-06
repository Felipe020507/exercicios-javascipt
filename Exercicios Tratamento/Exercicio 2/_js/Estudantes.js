export default class Estudantes{
    #nome;
    #idade;
    #notas;


    constructor(nome ,idade, notas){
        this.#idade = idade;
        this.#nome = nome;
        this.#notas = notas;
    }




    exibirDetalhesEstudante(){
        console.log("Detalhes do Estudante");
        console.log("Nome: ", this.getNome);
        console.log("Idade: ", this.getIdade);
        }

         //Metodos Gets e Sets

    get getNome(){
        return this.#nome;
    }

    get getIdade(){
        return this.#idade;
    }

    get getNotas(){
        return this.#notas;
    }

    }


