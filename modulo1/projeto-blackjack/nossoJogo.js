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
/* console.log("Boas vindas ao jogo de Blackjack!");

if (confirm("Quer iniciar uma nova rodada?")) {

    const usuarioPrimeira = comprarCarta();
    const usuarioSegunda = comprarCarta();
    const computadorPrimeira = comprarCarta();
    const computadorSegunda = comprarCarta();

    let pontosUsuario = usuarioPrimeira.valor + usuarioSegunda.valor
    let pontosComputador = computadorPrimeira.valor + computadorSegunda.valor


    console.log(`Usuário - cartas: ${usuarioPrimeira.texto} ${usuarioSegunda.texto} - pontuação ${pontosUsuario}`)
    console.log(`Computador - cartas: ${computadorPrimeira.texto} ${computadorSegunda.texto} - pontuação ${pontosComputador}`)
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
} */