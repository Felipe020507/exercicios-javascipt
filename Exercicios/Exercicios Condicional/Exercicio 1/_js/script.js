function exibirNumero(){

    let numero = document.getElementById("numeroInput").value;

    if(numero == 0){

        document.write("O numero é igual a zero")
    }

    else if(numero < 0){

        document.write("O numero é negativo")
    }
    
    else if(numero > 0){
        document.write("O numero é positivo")
    }

}
