let texto = "Meu CPF: 432.678.903-95"

let expressao = /\d{3}.\d{3}.\d{3}-\d{2}/g

let resultado = texto.match(expressao);

console.log(resultado);