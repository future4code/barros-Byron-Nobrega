//Exercícios de interpretação de código
//1)
/* a) Explique o que o código faz. Qual o teste que ele realiza?
O código  faz um teste na variável número ele varifica se o 
numero armazenado na variavel é par, ou seja, se o modulo do 
numero é zero.

b) Para que tipos de números ele imprime no console "Passou no teste"? 
Quando o numero for par.

c) Para que tipos de números a mensagem é "Não passou no teste"?
Quando o numero for impar. */

//2
/* a) Para que serve o código acima?
Serve para consultar o preço dos produtos do switch case

b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
O preço da fruta Maçâ é R$ 2.25.

c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem 
impressa no console se retirássemos o `break` que está logo acima do `default` 
(o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
O preço da fruta Pêra é R$ 5 */

//3

/* a) O que a primeira linha está fazendo?
A primeira linha solicita ao usuario um numero que armazenada
na variavel numero, como ele usou o prompt para fazer a interação
ele usa a propriedade Number para transformar a string em numero.  

b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
No console vai aparecer a mensagem (Esse número passou no teste) com um 
erro abaixo que esta relacionade a variavel mensagem.


c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
Sim, porque a variavel mensagem esta declarada em um escopo local dentro do if,
para ela ser trabalhada da forma que foi ela tinha que esta no escopo global usando o
this. */

//Exercícios de escrita de código

//1)

/* let habilitado = Number(prompt(`Qual a sua idade?`))

const verificarIdade = function(idade){
    if (idade >= 18) {

        console.log("Você pode dirigir");
               
    }else {
        console.log("Você não pode dirigir");
    }

}

verificarIdade(habilitado) */

//2) e 3)
/* let turno = prompt(`Qual o turno que voçê estuda?
use M (matutino) ou V (Vespertino) ou N (Noturno)`)

const turnoEstudo = function(turno) {

    if (turno.toUpperCase() === "M") {

        console.log(`Bom Dia!`);
        
    } else if (turno.toUpperCase() === "V") {
        console.log(`Boa Tarde!`);
        
    }else if (turno.toUpperCase() === "N"){
        console.log(`Boa Noite!`);
        
    }else{
        console.log(`Turno Não Encontrado
        Favor verifique Sua Resposta!`);

    }
    
}
turnoEstudo(turno)

switch (turno.toUpperCase()) {
    case "M":
        console.log(`Bom Dia!`);
         break;
    case "V":
         console.log(`Boa Tarde!`);
          break;
    case "N":
          console.log(`Boa Noite!`);
           break;
    default:
        console.log(`Turno Não Encontrado
        Favor verifique Sua Resposta!`);

        break;
}  */

//4)

/* let generoFilme = prompt(`Qual o gênero do Filme?`)
let valorIngresso = Number(prompt(`Qual o valor do Ingresso?`))

const assistirFilme = function(filme,valorIngresso) {
    if (filme === "fantasia" && valorIngresso<= 15) {
        console.log(`Bom Filme!`);
    } else {
        console.log("Escolha outro filme :(");
        
    }


}

assistirFilme(generoFilme.toLowerCase(),valorIngresso) */

//Desafios

//1)
/* let generoFilme = prompt(`Qual o gênero do Filme?`)
let valorIngresso = Number(prompt(`Qual o valor do Ingresso?`))

const assistirFilme = function(filme,valorIngresso) {
    if (filme === "fantasia" && valorIngresso<= 15) {
        lanche = prompt(`Qual o lamche que vai comprar?`)
        console.log(`Bom Filme!
    Aproveite o seu ${lanche}`);
    } else {
        console.log("Escolha outro filme :(");
        
    }


}

assistirFilme(generoFilme.toLowerCase(),valorIngresso) */

//2)

let nomeClienete = prompt(`Digite seu nome completo:`)
let tipoJogo = prompt(`Qual o tipo de jogo?
Use  IN indica internacional e DO indica doméstico`)
let etapaJogo = prompt(`Qual a etapa?
Use SF indica semi-final DT indica decisão de terceiro lugar e FI indica final`)
let categoria = prompt(`Indique uma categorioa:
opções 1, 2, 3 ou 4`)
let quantidadeingresso = Number(prompt(`Qual a quantidade de Ingressos`))
let valorIngresso
let moeda = "R$"

const etapasCase = function(JogoEtapa) {

    switch (JogoEtapa) {
        case "SF":
            return this.etapaJogo = "Semi-Final"
            break;
        case "DT":
            return this.etapaJogo = "Decisão do 3º lugar"
        case "FI":
            return this.etapaJogo = "Final"
        default:
            console.log(`Valor não encontardo 
        verifique a etapa do jogo!`);

            break;
    }

}

const categoriaJogo = function(JogoEtapa, catgoriaIngresso) {
    switch (JogoEtapa, catgoriaIngresso) {
        case "SF" && "1":
            return this.valorIngresso = 1320.00
            break;
        case "SF" && "2":
            return this.valorIngresso = 880.00
            break;
        case "SF" && "3":
            return this.valorIngresso = 550.00
            break;
        case "SF" && "4":
            return this.valorIngresso = 220.00
            break;
        case "DT" && "1":
            return this.valorIngresso = 660.00
            break;
        case "DT" && "2":
            return this.valorIngresso = 440.00
            break;
        case "DT" && "3":
            return this.valorIngresso = 330.00
            break;
        case "DT" && "4":
            return this.valorIngresso = 170.00
            break;
        case "FI" && "1":
            return this.valorIngresso = 1980.00
            break;
        case "FI" && "2":
            return this.valorIngresso = 1320.00
            break;
        case "FI" && "3":
            return this.valorIngresso = 880.00
            break;
        case "FI" && "4":
            return this.valorIngresso = 330.00
            break;
        default:
            console.log(`Valor não encontardo 
            verifique a categoria do jogo!`);
            break;
    }
}

const jogoTipo = function(tipoDeJogo) {

    switch (tipoDeJogo) {
        case "IN":
            return this.tipoJogo = "Internacional"
            break
        case "DO":
            return this.tipoJogo = "Nacional"
            break;
        default:
            console.log(`Valor não encontardo 
            verifique o tipo do jogo!`);
            break;
    }

}

etapasCase(etapaJogo)
categoriaJogo(etapaJogo, categoria)
jogoTipo(tipoJogo);

if (tipoJogo === "IN") {
    this.valorIngresso *= 4.10;
}

if (tipoJogo === "IN") {
    moeda = "U$";
}



console.log(`
---Dados da compra--- 
Nome do cliente:  ${nomeClienete} 
Tipo do jogo:  ${this.tipoJogo} 
Etapa do jogo:  ${this.etapaJogo} 
Categoria:  ${categoria} 
Quantidade de Ingressos:  ${quantidadeingresso} ingressos 
---Valores--- 
Valor do ingresso:  ${moeda} ${this.valorIngresso}
Valor total:  ${moeda} ${this.valorIngresso *= quantidadeingresso}
`);