let texto = "Ola \t M como esta o \n K ?"
let expressao = /\s/g;

let resultados = texto.replace(expressao,'');

console.log(resultados);