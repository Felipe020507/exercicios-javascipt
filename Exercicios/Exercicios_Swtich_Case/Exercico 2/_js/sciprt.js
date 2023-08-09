function operacoes() {
    let n1 = parseFloat (document.getElementById("primeiroNumero").value);

    let n2 = parseFloat (document.getElementById("segundoNumero").value);

    let media = parseFloat ((n1 + n2) /2);

    let diferenca = parseFloat(n1 - n2);

    let produto = parseFloat(n1 * n2);

    let divisao = parseFloat(n1 / n2)

    let operacao = parseInt (document.getElementById("opcaoOperacoes").value)

    if((operacao == 1) || (operacao == 2) || (operacao == 3) || (operacao == 4)) {

        switch(operacao){
            case 1:
            document.write("A media entre os números e " + media)
            break;
            case 2:
                document.write("A diferença entre os números e " + diferenca)
                break;
            case 3:
            document.write("O produto entre os números e " + produto)
            break;
            case 4:
                document.write("A divisao entre os números e " + divisao)
                break;
        }
    }

    else {
        document.write("Opcao Invalida")
    }
}