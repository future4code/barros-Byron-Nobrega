// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const alturaRetangulo = Number(prompt('Digite a altura do retângulo'))
  const laguraRetangulo = Number(prompt('Digite a largura do retângulo'))
  const area = altura* lagura
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Qual o ano Atual"))
  let anoNascimento = Number(prompt("Que ano você Nasceu"))

  console.log(anoAtual-anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
   return imc = peso/(altura * altura)

 
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Digite seu nome")
  let idade = prompt("Digite sua idade")
  let email = prompt("Digite seu email")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt("Digite qual a 1º cor favorita")
  let cor2 = prompt("Digite qual a 2º cor favorita")
  let cor3 = prompt("Digite qual a 3º cor favorita")
  let cor = [cor1,cor2,cor3]
  
  console.log(cor)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return maiusculo = string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return quantidade = custo/valorIngresso


}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return tamanho = string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return elemento = array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return ultimoelemento = array[array.length - 1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let elemento = array[0]
  let ultimoelemento = array[array.length - 1]
  
  array.shift(elemento)
  array.pop(ultimoelemento)
  array.push(elemento) 
  array.unshift(ultimoelemento) 
  
  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return iguais = string1.toLowerCase() === string2.toLowerCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite o ano atual"))
  let anoNascimento = Number(prompt("Digite o ano que você nasceu"))
  let rg = Number(prompt("Digite o ano de emissão do RG"))

   let idadePessoa = anoAtual - anoNascimento
   let temprg = anoAtual - rg


   let idade20 = (idadePessoa <= 20) && (temprg === 5)
   let idade50 = idadePessoa <= 50 && temprg >= 10
   let idadeIdosa = idadePessoa >50 && temprg >= 15

  let resultado = idade20||idade50||idadeIdosa

  console.log(resultado)


}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let multiplo = ano%4
  let multiplo400 = ano%400
  let multiplo100 = ano%100

  let modulo4 = multiplo == 0
  let modulo400 = multiplo400 == 0
  let modulo100 = multiplo100 != 0

  let resultado = modulo4&&modulo100||modulo400

  return resultado



}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
 let maior = prompt("Tem mais de 18 anos?")
 let medioCompleto = prompt("Tem ensino médio completo?")
 let horario = prompt("Tem disponibilidade de horários?")
 let resposta = "sim"

 let respostaMaior = (resposta=== maior)
 let respostamedioCompleto = (resposta === medioCompleto)
 let respostaHorario = (resposta === horario)

 let alunoLebenu = respostaMaior&&respostamedioCompleto&&respostaHorario
 
  console.log(alunoLebenu)
}
