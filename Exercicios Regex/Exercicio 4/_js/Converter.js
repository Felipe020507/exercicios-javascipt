let texto = "Meu Cep e  14267-600";

let expressao =  /\b\d{5}-\d{3}\b/g;

let resultado = texto.match(expressao);

console.log(resultado);