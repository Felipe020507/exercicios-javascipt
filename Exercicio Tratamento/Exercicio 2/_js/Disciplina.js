 export default class Disciplina{

    #listaDisciplina

    constructor(){
        this.#listaDisciplina = [];
    }

    adicionarEstudante(Estudantes){
        this.#listaDisciplina.push(Estudantes)

        document.getElementById("nome").value = "";
        document.getElementById("idade").value = "";
        document.getElementById("notas").value = "";
    }

    calcularmedia(){
        
    }





 }