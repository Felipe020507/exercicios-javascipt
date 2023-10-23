export default class Escola{
    #listadeAlunos;

    constructor(){
        this.#listadeAlunos = []
    }

    adicionarAlunos(Aluno){
        this.#listadeAlunos.push(Aluno)
        document.getElementById("nome").value = "";
        document.getElementById("idade").value = "";
        document.getElementById("nromatricula").value = "";
        document.getElementById("notas").value = "";
    }



    listarAluno() {
        let listaDeAlunos = document.getElementById("listaAlunos");

        /*
        *  Remove os elementos filhos da lista antes de listar novamente.
        * Isso é feito para garantir que a lista seja recriada e atualizada 
        * com os dados mais recentes.
        */
        while (listaDeAlunos.firstChild) {
            listaDeAlunos.removeChild(listaDeAlunos.firstChild);
        }

        // Cria elementos HTML para cada tarefa e os adiciona na lista.
        for (let i = 0; i < this.#listadeAlunos.length; i++) {
            let alunos = this.#listadeAlunos[i];
            let itemAlunos = document.createElement("li");
            let caixaDeSelecaoEntrada = document.createElement("input");

            caixaDeSelecaoEntrada.type = "checkbox";
            caixaDeSelecaoEntrada.value = i;

            /**
             *  Ao usar o método appendChild, estamos dizendo ao navegador 
             * para adicionar o elemento da caixa de seleção como um filho 
             * do elemento da tarefa (<li>). 
             */
            itemAlunos.appendChild(caixaDeSelecaoEntrada);

            let alunosTexto = document.createTextNode(`Aluno ${i + 1}: ${alunos.exibirDetalhesAluno()}`);
            itemAlunos.appendChild(alunosTexto);

            listaDeAlunos.appendChild(itemAlunos);
        }
    }




}