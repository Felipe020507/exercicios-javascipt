import Professor from "./Professor.js"

    function iniciar(){
        let professor = new Professor("Mario"," Bross", "enganador e entrar em canos", "EEC", 10)
        professor.saudacao();
    }

document.addEventListener("DOMContentLoaded", iniciar);