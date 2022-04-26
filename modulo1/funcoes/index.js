//Exercícios de interpretação de código:
/* a) O que vai ser impresso no console?
no primeiro console.log 10 e no segundo 50

b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`?
A função retornara os valores do calculo,
que podem ser ultilizados posteriormente.

O que apareceria no console?
se foi removido o console.log no console não aparecera nada */

/* 
const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

a. Explique o que essa função faz e qual é sua utilidade
A função esta passando todo o texto do usuario para minusculo
e testando se à palavra "cenoura" esta no texto.A

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   Eu gosto de cenoura -> true
     ii.  CENOURA é bom pra vista-> true
     iii. Cenouras crescem na terra-> true */

//Exercícios de escrita de código
 
//EX-1
/* let sobreMim = function() {
    console.log(`Meu nome é Byron tenho 38 anos, 
moro em Caicó-RN e sou estudante Labenu`)
}

sobreMim(); */

/* let sobreLife = function(nome,idade,cidade,profissao) {
    nome = prompt(`Qual seu nome?`)
    idade = prompt(`Qual sua idade?`)
    cidade = prompt(`Qual sua cidade?`)
    profissao = prompt(`Qual sua profissão?`)
    console.log(`Eu sou ${nome}, tenho ${idade} anos,
moro em ${cidade} e sou ${profissao}`);
    
}

sobreLife();
 */

//EX-2

/* const numero1 = Number(prompt(`Digite o primeiro número:`))
const numero2 = Number(prompt(`Digite o segundo número:`))

let soma = function(numero1,numero2) {
    return numero1+numero2
}

console.log(`A soma dos dois números é ${soma(numero1,numero2)}`); */

/* const numeros1 = Number(prompt(`Digite o primeiro número:`))
const numeros2 = Number(prompt(`Digite o segundo número:`))

let somas = function(numeros1,numeros2) {
    return numeros1 >= numeros2
}

console.log(`${somas(numeros1,numeros2)}`); */

/* const digiteNumero1 = Number(prompt(`Descubra se o número é par:`))

let par = function(digiteNumero1) {
    return digiteNumero1%2 === 0
}

console.log(`O número é par? ${par(digiteNumero1)}`); */

/* let tamanho = function (mensagem) {
    mensagem = prompt(`Digite sua mensagem.`).length
    console.log(`Sua mensagem tem ${mensagem}`);    
}

tamanho(); */

//EX-3
/* let numero1 = Number(prompt(`Qual o primeiro Número:`))
let numero2 = Number(prompt(`Qual o segundo Número:`))

function soma(numero1,numero2) {
   return numero1 + numero2    
}

function subtracao(numero1,numero2) {
    return numero1 - numero2    
}

function multiplicacao(numero1,numero2) {
        return numero1 * numero2
}

function divisao(numero1,numero2) {
    return numero1 / numero2
}

console.log(`
Números inseridos: ${numero1} e ${numero2}
Soma: ${soma(numero1,numero2)}
Diferença: ${subtracao(numero1,numero2)}
Multiplicação: ${multiplicacao(numero1,numero2)}
Divisão: ${divisao(numero1,numero2)}
`) */


//Desafios:

 let arrowfunction = (algumaCoisa) =>{
    console.log(algumaCoisa);
}

let arrowfunction2 = (valor1,valor2) =>{
    let soma = valor1 + valor2
    arrowfunction(soma)
}
arrowfunction2(3,10)

/* let pitagoras = function (cateto1,cateto2) {

    return hipotenusa = Math.hypot(cateto1, cateto2)
    
}

console.log(`A hipotenusa é ${pitagoras(3,4)} `); */