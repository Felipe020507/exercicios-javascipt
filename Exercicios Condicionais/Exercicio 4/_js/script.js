function compararNumeros() {

let n1 = parseInt(document.getElementById("primeiroNumero").value);

let n2 = parseInt(document.getElementById("segundoNumero").value);

if(n1 == n2){

    document.write("Os numeros sao iguais" + '\n')

}else{

    document.write("Os numeros sao diferente" + '\n')

}


if(n1 === n2){

    document.write("Os numeros sao estritamente iguais" + '\n')

}else{

    document.write("Os numeros sao estritamente diferentes" + '\n')

}
    
}