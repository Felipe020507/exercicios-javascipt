//Calcula o Triângulo

class Triangulo {
    constructor(base, altura, lado1, lado2, lado3) {
        this.base = base;
        this.altura = altura;
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }

    calcularArea() {
        return (this.base * this.altura) / 2;
    }

    calcularPerimetro() {
        return this.lado1 + this.lado2 + this.lado3;
    }
}



// Calcular a Esfera

class Esfera {
    constructor(raio) {
        this.raio = raio;
    }

    calcularArea() {
        return 4 * Math.PI * this.raio * this.raio;
    }

    calcularVolume() {
        return (4 / 3) * Math.PI * Math.pow(this.raio, 3);
    }
}




//Calcular o Cilindro

class Cilindro {
    constructor(raio, altura) {
        this.raio = raio;
        this.altura = altura;
    }

    calcularArea() {
        return 2 * Math.PI * this.raio * (this.raio + this.altura);
    }

    calcularVolume() {
        return Math.PI * Math.pow(this.raio, 2) * this.altura;
    }
}



// Como se fosse a main no Java


class CalculadoraGeometrica {
    constructor() {
        this.resultadoElement = document.getElementById('resultado');
    }


    calcularTodasAsAreas() {
        const triangulo = new Triangulo(5, 4, 3, 4, 5);
        const esfera = new Esfera(6);
        const cilindro = new Cilindro(2, 6);


        const areaTriangulo = triangulo.calcularArea();
        const perimetroTriangulo = triangulo.calcularPerimetro();
        const areaEsfera = esfera.calcularArea();
        const volumeEsfera = esfera.calcularVolume();
        const areaCilindro = cilindro.calcularArea();
        const volumeCilindro = cilindro.calcularVolume();



        this.mostrarResultado(`Triângulo: Área = ${areaTriangulo.toFixed(2)}`);
        this.mostrarResultado(`Triângulo: Perímetro = ${perimetroTriangulo.toFixed(2)}`);
        this.mostrarResultado(`Esfera: Área = ${areaEsfera.toFixed(2)}`);
        this.mostrarResultado(`Esfera: Volume = ${volumeEsfera.toFixed(2)}`);
        this.mostrarResultado(`Cilindro: Área = ${areaCilindro.toFixed(2)}`);
        this.mostrarResultado(`Cilindro: Volume = ${volumeCilindro.toFixed(2)}`);

    }

    mostrarResultado(texto) {
        const resultadoItem = document.createElement('p');
        resultadoItem.textContent = texto;
        this.resultadoElement.appendChild(resultadoItem);
    }
}

const calculadora = new CalculadoraGeometrica();
calculadora.calcularTodasAsAreas();
