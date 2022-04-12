// resposta do 1:
// console.log(b) imprime 10
// console.log(a,b) imprime 10 5

//resposta do 2:
// console.log(a, b, c) imprime 10 10 10

// resposta do 3:
// let p = prompt("Quantas horas você trabalha por dia?")
// let quantasHorasTrabalhadasDia

// let t = prompt("Quanto você recebe por dia?")
// let quantoRecebeDia

// alert(`Voce recebe ${t/p} por hora`)
// o resultado é a divisão do valor recebido pela 
// quantidade de horas trabalhadas por dia.

let nomePessoa
let idadePessoa

console.log(typeof nomePessoa , idadePessoa )
//isso ocorre porque as variaves estão sem informação nem uma 
// por isso aparece undefined

nomePessoa = prompt("Digite Seu Nome Completo:")
idadePessoa = prompt("Digite Sua Idade:")

console.log(nomePessoa,",",idadePessoa ) //mostrar no console o que foi preenchido nas variavei 

console.log(typeof nomePessoa ) 
console.log(typeof idadePessoa)// verifica o tipo da variavel 
// ouve a auteração do tipo de undefined para tipos primitivos 
// string até com a variavel idadePessoa, pois por padrão o 
// tudo que estiver com prompt() é uma string.

console.log("Olá", nomePessoa,", você tem",idadePessoa,"anos") //imprime no console a mensagem com as variaveis 


//Escreva 3 perguntas:
let corCamisa ="Você esta com camisa verde?"
let jogoTabuleiro = "Você joga jogos de tabuleiro?"
let jagaXadrez = "Você joga Xadrez?"



let respostaCorCamisa = prompt( corCamisa)
let respostaJagoTabuleiro = prompt(jogoTabuleiro)
let respostaJagaXabrez = prompt(jagaXadrez)

console.log(corCamisa , respostaCorCamisa)
console.log(jogoTabuleiro , respostaJagoTabuleiro)
console.log(jagaXadrez , respostaJagaXabrez)



//Crie a lógica que deve ser inserida no código para que os valores de a e b sejam trocados
let a = prompt("Digite o valor de a :")
let b = prompt("Digite o valor de b :")//variavel para armezenar os valores iniciais
let c //variaveis auxiliar
c = a
a = b
b = c

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

//desafio 
let primeiroNumero = prompt("Digite um valor para o 1º Número:")
let segundoNumero = prompt("Digite um valor para o 2º Número:")//variavel para armezenar os valores iniciais
let soma = Number(primeiroNumero) + Number(segundoNumero) // a variavel vai armazenar a soma entro os numeros
let mutipica = primeiroNumero * segundoNumero //a variavel vai armazenar a multiplicãção entro os numeros 


console.log("A soma de",primeiroNumero, "e",segundoNumero, "é",soma)
console.log("A multiplicação de",primeiroNumero, "e",segundoNumero, "é :",mutipica)