function raiz(a) {
    return Math.sqrt(a)
}

function exponencial(a) {
    return Math.pow(a,a)
}


function calcular() {
    const num1 = (document.getElementById("numero").value);
    const operacao = (document.getElementById("operacoes").value);
    let result;


    switch (operacao) {
        case "raiz":
            result = raiz(num1);
            break;
        case "exponencial":
        result = exponencial(num1);
        break;
    }

    document.getElementById("result").textContent = `O resultado da operação é: ${result}`;
}

document.getElementById("calcular").addEventListener("click", calcular)