function tipostriangulos() {

    let lado1 = parseFloat (document.getElementById("primeiroLado").value);

    let lado2 = parseFloat(document.getElementById("segundoLado").value);

    let lado3 = parseFloat(document.getElementById("terceiroLado").value);

    if ((lado1 < lado2 + lado3) && (lado2 <lado1 + lado3) && (lado3 < lado2 + lado1)) {   
   
        document.write("E um triangulo")
        document.write("\n")   
        
        if ((lado1 == lado2) && (lado2 == lado3)) {                       
           document.write("E um triangulo Equliatero") 
        }

        else {

            if ((lado1 == lado2) || (lado1 == lado3) || (lado3 == lado2)) {                 
                document.write("E um triangulo Isoceles")      
            }

            else {                                  
                document.write("E um triangulo Escaleno")
            }
        } 

    }
    
    else{
        document.write("Não e um triangulo")          
    } 
}