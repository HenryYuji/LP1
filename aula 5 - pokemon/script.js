let resultado = document.getElementById('resultado')

function pokemonOponente() {
    const pokemon = ["Pikachu","Charmander","Bulbassaur","Squirtle"]
    let aleatorio = Math.floor(Math.random() * pokemon.length)
    return pokemon[aleatorio]
}

function pokemonUsuario(botaoClicado) {
    return botaoClicado
}

function jogar(escolhaUser){
    const escolhaJogador = pokemonUsuario(escolhaUser)
    const escolhaOponente = pokemonOponente()

    if((escolhaJogador==='Pikachu'&&(escolhaOponente==='Squirtle'||escolhaOponente==='Bulbassaur')),
       (escolhaJogador==='Charmander'&&(escolhaOponente==='Bulbassaur'||escolhaOponente==='Pikachu')),
       (escolhaJogador==='Squirtle'&&escolhaOponente==='Charmander'),
       (escolhaJogador==='Bulbassaur'&&escolhaOponente==='Squirtle')){
        resultado.innerText = `Vitória!! Você escolheu: ${escolhaJogador} e o Oponente escolheu: ${escolhaOponente}!`
    }
    else if(escolhaJogador===escolhaOponente){
        resultado.innerText = `Empate!! Os dois escolheram o mesmo pokémon! ${escolhaJogador}`
    }
    else {
        resultado.innerText = `Derrota! Você escolheu: ${escolhaJogador} e o Oponente escolheu: ${escolhaOponente}!`
    }
}