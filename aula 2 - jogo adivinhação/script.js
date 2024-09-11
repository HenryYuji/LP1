function gerarNumeroAleatorio(){
    const numeroAleatorio = Math.floor(Math.random() * 11)
    return numeroAleatorio
}

function jogar() {
    const pegarNumeroAleatorio = gerarNumeroAleatorio()
    console.log(pegarNumeroAleatorio)
}

jogar()