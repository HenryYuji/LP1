let resultado = document.getElementById("resultado")

function escolhaOponente() {
    const jokenpo = ["Pedra","Papel","Tesoura"]
    let aleatorio = Math.floor(Math.random() * jokenpo.length)
    return jokenpo[aleatorio]
}

function escolhaJogador(botaoClicado) {
    return botaoClicado
}

function jogar(escolhaUser) {
    const jogadaPC = escolhaOponente()
    const escolhaUsuario = escolhaJogador(escolhaUser)

    if(jogadaPC === escolhaUsuario){
        resultado.innerText = `Empate!  Oponente: ${jogadaPC}, Você: ${escolhaUsuario}`
    }
    else if((jogadaPC === "Pedra" && escolhaUsuario === "Papel")||
      (jogadaPC === "Papel" && escolhaUsuario === "Tesoura")||
      (jogadaPC === "Tesoura" && escolhaUsuario === "Pedra")){
        resultado.innerText = `Vitória!!!  Oponente: ${jogadaPC}, Você: ${escolhaUsuario}`
    }
    else {
        resultado.innerText = `Derrota! Oponente: ${jogadaPC}, Você: ${escolhaUsuario}`
    }
}