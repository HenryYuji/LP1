const futuros = ['Você vai ficar milionário!', 
'Você vai falir!', 
'Você vai ter uma familia grande!', 
'Você vai virar famoso!',
'Você vai conquistar o seu sonho!',
'Você vai ganhar muitos amigos!',
'Você vai ser preso!',
'Você vai morrer!',
'Você vai conhecer o seu ídolo!',
'Você vai ficar muito inteligente!']

function gerarAleatorio() {
    const numeroAleatorio = Math.floor(Math.random() * 10)
    return numeroAleatorio
}

function sortear() {
    let numeroSorteado = gerarAleatorio()
    alert(futuros[numeroSorteado])
}