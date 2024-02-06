document.addEventListener("DOMContentLoaded", function() {
    let botaoCalcular = document.getElementById("btnCalcular");
    let numeroInput = document.getElementById("numero");
    let saida = document.getElementById("saida");

    botaoCalcular.addEventListener("click", function() {
        let numero = parseFloat(numeroInput.value);

        try {
            if (isNaN(numero)) {
                throw new Error("Digite um número válido.");
            }

            if (numero < 0) {
                throw new Error("Não é possível calcular a raiz de um número negativo.");
            }

            let raiz = Math.sqrt(numero);
            saida.textContent = `A raiz quadrada de ${numero} é ${raiz.toFixed(2)}.`;
        } catch (error) {
            saida.textContent = "Erro: " + error.message;
        }
    });
});

