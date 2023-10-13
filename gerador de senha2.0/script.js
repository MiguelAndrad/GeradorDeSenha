const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.btGS.addEventListener("click", (e) => {

    let minusculo = "abcdefghijklmnopqrstuvwxyz"
    let simbolos = "!@#$%&*()_{}[]?^+<>:"
    let numeros = "0123456789"
    let maiusculo = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    let senha = ""
    let quantidade = 3

    for (i = 0; i < quantidade; i++) {
        aleatorioA = Math.floor(Math.random() * minusculo.length)
        senha += minusculo.substring(aleatorioA, aleatorioA + 1)
    }

    for (i = 0; i < quantidade; i++) {
        aleatorioS = Math.floor(Math.random() * simbolos.length)
        senha += simbolos.substring(aleatorioS, aleatorioS + 1)
    }

    for (i = 0; i < quantidade; i++) {
        aleatorioN = Math.floor(Math.random() * numeros.length)
        senha += numeros.substring(aleatorioN, aleatorioN + 1)
    }

    for (i = 0; i < quantidade; i++) {
        aleatorioma = Math.floor(Math.random() * maiusculo.length)
        senha += maiusculo.substring(aleatorioma, aleatorioma + 1)
    }
    
    let senhaF = ""

    let vNumeros = []
    let tamanhoVetor = 12

    do {
        let numeroAleatorio = Math.floor(Math.random() * 12)
        if (!vNumeros.includes(numeroAleatorio)) {
            vNumeros.push(numeroAleatorio)
        }
    } while (vNumeros.length < tamanhoVetor)

    for (let i = 0; i < vNumeros.length; i++) {
        senhaF += senha.charAt(vNumeros[i]);
    }

    resp.innerText = `Senha gerada: ${senhaF}`
})