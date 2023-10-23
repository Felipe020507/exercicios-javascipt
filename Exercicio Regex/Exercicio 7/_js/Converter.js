let texto = "Meu  email e shaolinmatadordeporcooficial@gmail.com";

let expressao =  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;;

let resultado = texto.match(expressao);

console.log(resultado);