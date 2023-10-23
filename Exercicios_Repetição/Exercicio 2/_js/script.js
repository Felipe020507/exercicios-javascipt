function numerospareseimpares() {

    let n1 = parseInt(document.getElementById("primeiroNumero").value);

    let contador = 1;

    let par = 0;

    let impar = 0;


    while(contador < 3) {
        contador = contador + 1;
         if (n1 % 2 == 0) {
             par = par + 1;
         }
         else {
             impar = impar + 1;
         }
         
         document.write("Quantidade de pares: " + par);
		document.write("Quantidade de impares: " + impar);
    }



}