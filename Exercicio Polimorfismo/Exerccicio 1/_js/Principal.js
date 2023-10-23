import Professor from "./Professor.js";
import Aluno from "./Aluno.js";

let prof = new Professor("Marcinho", 35, "Salvar crianças do Jorge");
let alun = new Aluno("Claudinho", 18, "45689");

console.log(alun.apresentar());
console.log(prof.apresentar());
