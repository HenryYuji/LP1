let numero1 = parseFloat(prompt('Digite um número'))
let numero2 = parseFloat(prompt('Digite outro número'))
let numero = (numero1 + numero2)/2

alert(`Arredondado: ${Math.round(numero)}
, Arredondado para cima: ${Math.ceil(numero)}
, Arredondado para baixo: ${Math.floor(numero)}`)