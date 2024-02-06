let texto = "1234 ola como vai numero 1 ?";

let expressao = /\d+/g;

let resultados = texto.match(expressao);

console.log(resultados);