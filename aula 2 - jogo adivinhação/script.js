function gerarNumeroAleatorio(){
    const numeroAleatorio = Math.floor(Math.random() * 101)
    return numeroAleatorio
}
function jogar() {
    const numero = gerarNumeroAleatorio()
    let palpite = ""
    let tentativas = 6
    console.log(numero)

    do {
       palpite = parseInt(prompt('Adivinhe o número:'))
       if(palpite < numero) {
        tentativas--
            alert(`Número Errado! O numero certo é MAIOR! 
            Você ainda tem ${tentativas} tentativa(s)!`)
       }
       else if(palpite >  numero) {
        tentativas--
            alert(`Número Errado! O numero certo é MENOR! 
            Você ainda tem ${tentativas} tentativa(s)!`)
       }
       else if(palpite===numero) {
            alert('Parabéns! Você acertou!')
            return
       }
    }
    while(tentativas != 0)
}
jogar()