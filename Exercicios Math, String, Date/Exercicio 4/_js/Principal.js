import Funcionario from "./Funcionario.js";

const funcionario1 = new Funcionario(
    'Flavio Pneu',
    new Date('2010-05-15'),
    new Date('2021-07-30'),
    10, 
    3000 
  );
  
  funcionario1.exibirDetalhesFuncionario();