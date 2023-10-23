import ProdutoEletronico from "./ProdutoEletronico.js"
import ProdutoAlimenticio from "./ProdutoAlimenticio.js"

function iniciar(){
    let  produtoe = new ProdutoEletronico("PC da nasa", 6500, 342, 1, 120)
    let produtoa = new ProdutoAlimenticio("Maça", 2, 212, 1, "06/09/2023")
    produtoe.informacao();
    produtoa.informacao();
} 

document.addEventListener("DOMContentLoaded", iniciar);

