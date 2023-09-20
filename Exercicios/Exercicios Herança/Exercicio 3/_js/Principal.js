import Caminhao from "./Caminhao.js"
import Carro from "./Carro.js"


function iniciar(){
    let car = new Carro ("Ferrari", "Ferrari misturada com fusca", 2024, 2)
    let cam = new Caminhao ("Mercedes", "Mercedes misturado com Uno", 2024, 1200)
    car.informacao();
    cam.informacao();
}

document.addEventListener("DOMContentLoaded", iniciar)