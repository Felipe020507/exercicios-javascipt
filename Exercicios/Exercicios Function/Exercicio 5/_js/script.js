function quadrado(a){
     return Math.pow(a,2);
}

function Kadrado(){
 var lado = prompt("Digite o lado: ")
 

 let area = quadrado(lado)

 document.getElementById("resultquad").innerText = `O Resultado é: ${area}`

}

function retangulo(a,b){
    return a * b;
}

function Reitangulo() {
    var base = prompt("Digite a base: ")

    var altura = prompt("Digite a altura: ")

    let area = retangulo(base, altura)

    document.getElementById("resultretang").innerText = `O Resultado é: ${area}`
}

function trapezio(a,b,c){
    return (a+b)*c/2
}

function Tapezio(){
    var basemaior = prompt("Digite a base maior: ")

    var basemenor = prompt("Digite a base menor: ")

    var altura = prompt("Digite a altura: ")

    let area = trapezio(basemaior,basemenor,altura)

    document.getElementById("resulttrapez").innerText = `O Resultado é: ${area}`
}


function triangulo(b,a){
    return (b*a)/2
}

function Tangulo(){
    var base = prompt("Digite a base: ")

    var altura = prompt("Digite a altura: ")

    let area = triangulo(base,altura)

    document.getElementById("resulttriang").innerText = `O Resultado é: ${area}`
}

function circulo(r){
   return Math.PI*r
}

function Ciculo(){
    var raio = prompt("Digite o raio: ")
    
    let area = circulo(raio).toFixed(2)

    document.getElementById("resultcircu").innerText = `O Resultado é: ${area}`
}