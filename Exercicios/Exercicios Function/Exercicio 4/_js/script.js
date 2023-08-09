const inputString = document.getElementById('inputString');
const contarVogaisBtn = document.getElementById('contarVogais');
const resultado = document.getElementById('resultado');

contarVogaisBtn.addEventListener('click', () => {
    const str = inputString.value;
    const numeroVogais = contarVogais(str);
    resultado.textContent = `O número de vogais na palavra "${str}" é: ${numeroVogais}`;
});

function contarVogais(str) {
    
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;

    for (const char of str.toLowerCase()) {
        if (vogais.includes(char)) {
            contador++;
        }
    }

    return contador;
}
