//funcao realiza adicao
function adicao(a, b) {
    return a + b;
  }
  
  // Função realiza a subtração
  function subtracao(a, b) {
    return a - b;
  }
  
  // Função realiza a multiplicação
  function multiplicacao(a, b) {
    return a * b;
  }
  
  // Função realiza a divisão
  function divisao(a, b) {
    if (b !== 0) {
      return a / b;
    }

    else {
      return "Não é possível dividir por zero.";
    }
  }
  
  function calcular() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operacao = document.getElementById("operacoes").value;
    let result;

    try {
      if (isNaN(num1) || isNaN(num2)) {
          throw new Error("Digite números válidos");
      }

      if (operacao === "divisao" && num2 === 0) {
          throw new Error("Não é possível dividir por zero.");
      }


  } catch (error) {
      return document.getElementById("result").innerText = "Erro: " + error.message;
  } 
 
    
  
    switch (operacao) {
      case "adicao":
        result = adicao(num1, num2);
        break;
      case "subtracao":
        result = subtracao(num1, num2);
        break;
      case "multiplicacao":
        result = multiplicacao(num1, num2);
        break;
      case "divisao":
        result = divisao(num1, num2);
        break;
      default:
        result = "Operação inválida";
    }
  
    document.getElementById("result").textContent = `O resultado da operação é: ${result}`;
  }
  
  document.getElementById("calcular").addEventListener("click",calcular);