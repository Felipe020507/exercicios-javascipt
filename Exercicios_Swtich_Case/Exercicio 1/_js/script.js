function exibirMenu(){
    let estacoes = parseInt(document.getElementById("estacao").value)

    if((estacoes == 1) || (estacoes== 2) || (estacoes == 3) || (estacoes == 4)) {
        switch(estacoes){
            case 1:
                document.write("Primaveira")
                break;
                case 2:
                    document.write("Verão")
                    break;
                    case 3:
                        document.write("Outono")
                        break;
                        case 4:
                            document.write("Inverno")
                            break;
        }
    }
    else{
        document.write("Opçao invalida")
    }
}