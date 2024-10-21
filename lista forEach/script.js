function exercicio1() {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
    let numerosPares = []

    numeros.forEach(function (pegarNumero){
        if(pegarNumero % 2 === 0){
            numerosPares.push(pegarNumero)
        }
    }
)
    console.log(numerosPares)
}

function exercicio2() {
    let nomes = ["João", "Maria", "Carlos", "Ana"];

    nomes.forEach(function (pegarNome){
        console.log(`Sr(a). ${pegarNome}`)
    }
)
}

function exercicio3() {
    let numeros = [4, 11, 8, 15, 23, 7, 2];
    let maiores = []

    numeros.forEach(function (pegarNumero){
        if(pegarNumero > 10){
            maiores++
        }
    }
)
    console.log(maiores)
}

function exercicio5() {
    let nomes = ["ana", "carlos", "maria"];
    let maiusculo = []

    nomes.forEach(function (){
        
    })
}

exercicio1()
exercicio2()
exercicio3()