/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let arrayUsuarioCartas = []
let arrayComputadorCartas = []

if (confirm(`Boas vindas ao jogo de Blackjack!
Quer iniciar uma nova rodada?`)) {

    const carts = () => {
        arrayUsuarioCartas = [comprarCarta(), comprarCarta()]
        arrayComputadorCartas = [comprarCarta(), comprarCarta()]
    }
    carts();

    if ((arrayUsuarioCartas[0].valor == 11 && arrayUsuarioCartas[1].valor == 11) ||
        (arrayComputadorCartas[0].valor == 11 && arrayComputadorCartas[1].valor == 11)) {
        arrayUsuarioCartas = []
        arrayComputadorCartas = []
        carts();
    }

    let textosCartas = ""
    let pontosCartas = 0

    const metodoCartas = (array) => {

        for (let carta of array) {
            textosCartas += carta.texto + " "
            pontosCartas += carta.valor
        }
    }
    metodoCartas(arrayUsuarioCartas)
    let comprandoCartaUsuario = true

    while (comprandoCartaUsuario) {
        textosCartas = ""
        pontosCartas = 0
        metodoCartas(arrayUsuarioCartas)

        if (pontosCartas > 21) {
            comprandoCartaUsuario = false
        } else {
            let comprar = confirm(
                `Suas cartas são ${textosCartas} 
                 A carta revelada do computador é ${arrayComputadorCartas[0].texto}
                 Deseja comprar mais uma carta?`
            )

            if (comprar) {
                arrayUsuarioCartas.push(comprarCarta())

            } else {
                comprandoCartaUsuario = false
            }
        }
    }
    let textosCartasUsuario = textosCartas
    let valorPontosUsuario = pontosCartas
    textosCartas = ""
    pontosCartas = 0
    metodoCartas(arrayComputadorCartas)

    if (valorPontosUsuario <= 21) {

        while (pontosCartas <= 21 && pontosCartas < valorPontosUsuario) {
            arrayComputadorCartas.push(comprarCarta())
            textosCartas = ""
            pontosCartas = 0
            metodoCartas(arrayComputadorCartas)
        }

    }

    let textosCartasComputador = textosCartas
    let valorPontosComputador = pontosCartas
    let ganhador
    if (valorPontosComputador > valorPontosUsuario && valorPontosComputador <= 21) {
        ganhador = `O computador ganhou!`
    } else if (valorPontosUsuario > valorPontosComputador && valorPontosUsuario <= 21) {
        ganhador = `Você ganhou!`
    } else if (valorPontosComputador <= 21 && valorPontosUsuario > 21) {
        ganhador = `O computador ganhou!`
    } else if (valorPontosUsuario <= 21 && valorPontosComputador > 21) {
        ganhador = `Você ganhou!`
    } else {
        ganhador = `Jogo Empatado`
    }

    alert(
        `Suas cartas são ${textosCartasUsuario} . Sua pontuação é ${valorPontosUsuario}.
        As cartas do computador são ${textosCartasComputador} . A pontuação do computador é ${valorPontosComputador}
        ${ganhador}`

    )

}