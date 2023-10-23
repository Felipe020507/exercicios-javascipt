function exibirproduto(){
    let numero = parseInt(document.getElementById("codigoProduto").value)

    if((numero == 1) || (numero == 2) || (numero == 3) || (numero == 4) || (numero == 5) || (numero == 6) || (numero == 7) || (numero == 8) || (numero == 9) || (numero == 10) || (numero == 11) || (numero == 12) || (numero == 13) || (numero == 14) || (numero == 15)) {

        switch(numero){
            case 1:
                document.write("Alimento não-perecivel")
                break;
            case 2:
                document.write("Alimento perecivel")
                break;
            case 3:
                    document.write("Alimento perecivel")
                break;
            case 4:
                document.write("Alimento perecivel")
                break;
            case 5:
                    document.write("Vestuario")
                break;
            case 6:
                    document.write("Vestuario")
                break;
            case 7:
                    document.write("Higiene Pessoal")
                break;
            case 8:
                    document.write("Limpeza e Utensilios Domesticos")
                break;
            case 9:
                    document.write("Limpeza e Utensilios Domesticos")
                break;
            case 10:
                    document.write("Limpeza e Utensilios Domesticos")
                break;
            case 11:
                    document.write("Limpeza e Utensilios Domesticos")
                break;
            case 12:
                    document.write("Limpeza e Utensilios Domesticos")
                break;
            case 13:
                    document.write("Limpeza e Utensilios Domesticos")
                break;
            case 14:
                    document.write("Limpeza e Utensilios Domesticos")
                break;
            case 15:
                    document.write("Limpeza e Utensilios Domesticos")
                break;
                
        }
    }
    else{
        document.write("Opcao invalida")
    }

}