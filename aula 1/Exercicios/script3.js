function calcular() {
    const num1 = parseInt(document.getElementById('n1').value)
    const num2 = parseInt(document.getElementById('n2').value)
    const num3 = parseInt(document.getElementById('n3').value)
    const num4 = parseInt(document.getElementById('n4').value)
    const result = document.getElementById('resultado')
    
    let max = Math.max(num1,num2,num3,num4)
    let min = Math.min(num1,num2,num3,num4)

    result.innerText = `O Maior número é o ${max} e o Menor é o ${min}`
}
