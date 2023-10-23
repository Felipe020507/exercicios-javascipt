let texto = "Meu telefone e (156) 98311-1278";

let expressao = /\(\d{3}\) \d{5}-\d{4}/g

let resultado = texto.match(expressao);

console.log(resultado);

