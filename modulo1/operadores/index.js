
/* Ex. 1- Interpretação
let resultado = bool1 && bool2
console.log("a. ", resultado)
***o resultado é false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)
***o resultado é false 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
***o resultado é true 

console.log("d. ", typeof resultado)
***o typeof é boolean */

//EX 2-Interpretação
/* O código dele é feito para realizar uma soma de dois números
mas como tudo que esta no prompt é string a soma não acontece.
Solução: transformas a variavel em Number com o comando 
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))*/

//EX 3-Interpretação
/* Solução: transformas a variavel em Number com o comando 
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!")) */

//EX 1- escrita de código
/* let idade = Number(prompt("Digite sua idade:"))
let idadeMelhorAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))

const diferencaIdade = idade - idadeMelhorAmigo

console.log(`Sua idade é mairo do que a do seu melhot amigo?`, idade>idadeMelhorAmigo)

console.log(`A diferença de idade ${diferencaIdade} anos`) */

//EX 2- escrita de código
/* let numeroPar = Number(prompt("Digite um número par:"))
let par = numeroPar%2

console.log(`O resto da divisão é ${par}`)

c)Todo número par dividido por 2 não tem resto pois 
a divisão de números pares é exata

d)Quando o número for ímpar sempre avera resto pois 
a divisão de números ímpar não são exatas */ 

//EX 3- escrita de código
/* let idadeusuario = Number(prompt("Qual a sua idade?"))

const resultadoMeses = idadeusuario * 12
const resultadoDias = idadeusuario * 365
const resultadoHoras = resultadoDias * 24

console.log(`Meses de vida ${resultadoMeses}`)
console.log(`Dias de vida ${resultadoDias}`)
console.log(`Horas de vida ${resultadoHoras}`) */

//EX 4- escrita de código
/* let primeiroNumero = Number(prompt("Digite o 1º número:"))
let segundoNumero = Number(prompt("Digite o 2º número:"))

const maior = primeiroNumero > segundoNumero
const igual = primeiroNumero === segundoNumero
let primeiroDivisivel = (primeiroNumero%segundoNumero) === 0
let segundoDivisivel = (segundoNumero%primeiroDivisivel) === 0

console.log(`O primeiro numero é maior que segundo? ${maior}`)
console.log(`O primeiro numero é iqual ao segundo? ${igual}`)
console.log(`O primeiro numero é divisível pelo segundo? ${primeiroDivisivel}`)
console.log(`O segundo numero é divisível pelo primeiro? ${segundoDivisivel}`) */


//Ex 1- Desafio
/* let temperatura = 77

function fahrenheitKelvin(temperatura) {return (temperatura - 32)*(5/9) + 273.15}
function celsiusFahrenheit(temperatura) {return (temperatura * (9/5)) + 32}
 
console.log(`A temperatura de 77°F em  K é ${fahrenheitKelvin(temperatura)} K`)

temperatura = 88
console.log(`A temperatura de 88°C em  F é ${celsiusFahrenheit(temperatura)}° F`)

temperatura = 30
console.log(`A temperatura de 30°C em  F é ${celsiusFahrenheit(temperatura)}° F e em K é ${fahrenheitKelvin(temperatura)} K`)

temperatura = Number(prompt("Qual a temperatura em °C?"))
console.log(`A temperatura de ${temperatura}°C em  F é ${celsiusFahrenheit(temperatura)}° F e em K é ${fahrenheitKelvin(celsiusFahrenheit(temperatura))} K`) */

//Ex 2- Desafio
/* let quilowatt = 280
let conta = quilowatt * 0.05
console.log(`O valor a pagar é R$${conta}`)

let quilowattHora = Number(prompt("Digite aqui seu consumo kwh:"))
let contaConsumo = quilowattHora * 0.05
console.log(`O valor a pagar é R$${contaConsumo}`) */

//EX 3- Desafio
/* let libra = 20
let kg = libra/2.205
console.log(`${libra}lb equivale a ${kg}kg`) */

/* let onca = 10.5
let kg = onca/35.274
console.log(`${onca}oz equivale a ${kg}kg`) */

/* let pes = 50
let metro = pes/3.281
console.log(`${pes}ft equivale a ${metro}m`) */

/* let galao = 103.56
let litro = galao*3.785
console.log(`${galao}gal equivale a ${litro}l`) */

/* let xicara = 450
let litro = xicara*0.24
console.log(`${xicara}xic equivale a ${litro}l`) */

let libra = Number(prompt("Qual o valor das libras?"))
let kg = libra/2.205
console.log(`${libra}lb equivale a ${kg}kg`)
