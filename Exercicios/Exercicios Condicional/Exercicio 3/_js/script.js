function calcularmedia(){
    let numero1 =  parseFloat(document.getElementById('primeiraNota').value);

    let numero2 = parseFloat(document.getElementById('segundaNota').value);

    let numero3 = parseFloat(document.getElementById('terceiraNota').value);

    let media = parseFloat((numero1 + numero2 + numero3) / 3);
    ;

    if (media<6) {
        document.write("A media e " + media)
    }

    else if (media>6){
        document.write("A media e " + media)
    }
}