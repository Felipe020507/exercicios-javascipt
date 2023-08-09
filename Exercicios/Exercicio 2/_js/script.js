function exibirMes(){

    let selecaodeMes = document.getElementById("selecionaMes")

    let i = selecaodeMes.selectedIndex;

    let mesSelecionado = selecaodeMes.options[i].value;

    document.write("Mes selecionado" + " " + mesSelecionado)
}