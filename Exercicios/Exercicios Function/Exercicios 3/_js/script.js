const numeroInput = document.getElementById('numeroInput');
const adicionarNumeroBtn = document.getElementById('adicionarNumero');
const inverterNumerosBtn = document.getElementById('inverterNumeros');
const numerosLista = document.getElementById('numerosLista');
const numeros = [];

adicionarNumeroBtn.addEventListener('click', () => {
    const numero = parseFloat(numeroInput.value);
    if (!isNaN(numero)) {
        numeros.push(numero);
        numeroInput.value = '';
        exibirNumeros();
    }
});

inverterNumerosBtn.addEventListener('click', () => {
    numeros.reverse();
    exibirNumeros();
});

function exibirNumeros() {
    numerosLista.innerHTML = '';
    for (const numero of numeros) {
        const li = document.createElement('li');
        li.textContent = numero;
        numerosLista.appendChild(li);
    }
}
