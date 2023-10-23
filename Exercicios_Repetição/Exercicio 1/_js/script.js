function somadordois(){
    let numero = parseInt (document.getElementById("somarNumeros").value);

    let soma = 0;

    while(true){
        if(numero==-1){
            break;
        }
        soma = soma + numero;
    }

    document.write(soma)
}