import Aluno from "./Aluno.js";
import Escola from "./Escola.js";

let escola = new Escola;

document.getElementById("butaoAdicionar").addEventListener("click",function adicionarAluno() {
    //Obtém os valores dos campos de entrada.
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let nromatricula = document.getElementById("nromatricula").value;
    let notas = document.getElementById("notas");

    // Cria uma nova instância de Tarefa com os parâmetros criticidade, descricao, prazo.
    let novoAluno = new Aluno(nome, idade, nromatricula, notas);
    //chama o método adicionarTarefa passando a tarefa criada
    escola.adicionarAlunos(novoAluno);

})

document.getElementById("butaoMostrar").addEventListener("click",function mostrar(){


    escola.listarAluno()



})