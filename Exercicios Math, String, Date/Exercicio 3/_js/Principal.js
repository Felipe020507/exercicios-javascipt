import Viagem from "./Viagem.js";


    const viagem = new Viagem ('Marrocos', '2023/10/03', '5000')

    console.log(viagem.toString());

    const precoPassagem = 600;
    const precoHospedagem = 400
    const precoAlimentacao = 900
    
    const resultadoOrcamento = viagem.Orcamento(precoPassagem, precoHospedagem, precoAlimentacao);
    console.log(resultadoOrcamento);
