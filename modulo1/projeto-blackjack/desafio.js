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


console.log("Boas vindas ao jogo de Blackjack!");

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

    //let pontosUsuario = arrayUsuarioCartas[0].valor + arrayUsuarioCartas[1].valor;
    //let pontosComputador = arrayComputadorCartas[0].valor + arrayComputadorCartas[1].valor;
    let textosCartas = ""
    let valorPontos = 0

    const metodoCartas = (array) => {

        for (let carta of array) {
            textosCartas += carta.texto + " "
            valorPontos += carta.valor
        }
    }
    let comprandoCartaUsuario = true

    while (comprandoCartaUsuario) {
        metodoCartas(arrayUsuarioCartas)

        if (valorPontos > 21) {
            comprandoCartaUsuario = false
        } else {
            let confirmCompra = confirm(
                `Suas cartas são ${textosCartas} 
                 A carta revelada do computador é ${arrayComputadorCartas[0].texto}
                 Deseja comprar mais uma carta?`
            )

            if (confirmCompra) {
                arrayUsuarioCartas.push(comprarCarta())
            } else {
                comprandoCartaUsuario = false
            }
        }
    }



    /* console.log(`Usuário - cartas: ${usuarioCartas[0].texto} ${usuarioCartas[1].texto} - pontuação ${pontosUsuario}`)
    console.log(`Computador - cartas: ${computadorCartas[0].texto} ${computadorCartas[1].texto} - pontuação ${pontosComputador}`) */
    // imprime o texto da carta. Nesse caso: "K♦️"
    if (pontosUsuario > pontosComputador) {
        console.log("O usuário ganhou!")
    } else if (pontosComputador > pontosUsuario) {
        console.log("O computador ganhou!")
    } else if (pontosUsuario === pontosComputador) {
        console.log("Empate!")
    }

} else {
    console.log("O jogo acabou");
}