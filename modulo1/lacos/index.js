//-------------EXERCÍCIO 1-------------

// let numero
// let soma = 0

// while(numero !== 0) {
//     numero = Number(prompt("Insira um número:"))
//     soma = soma + numero
//     some += numero
// }

// console.log(soma)

//-------------EXERCÍCIO 2-------------

// let arrayDeNumeros = [11, 15, 18, 14, 12, 13]
// // arrayDeNumeros.length = 6
// //posicao < 6
// let array2DeNumeros = [101, 159, 18, 14, 312, 13, 43, 54, 6, 87]
// // array2DeNumeros.length = 10
// // posicao < 10

// function qualMaiorNumeroArray(array) {
//     let maiorNumero = 0

//     for(let indice = 0; indice < array.length; indice++) {
//         let numeroDoArray = array[indice]

//         if(numeroDoArray > maiorNumero) {
//             maiorNumero = numeroDoArray
//         }
//     }

//     return `O maior número é ${maiorNumero}`
// }

// console.log(qualMaiorNumeroArray(arrayDeNumeros))
// console.log(qualMaiorNumeroArray(array2DeNumeros))

// for(let numero of arrayDeNumeros) {
//     if(numero > maiorNumero) {
//         maiorNumero = numero
//     }
// }

//-------------EXERCÍCIO 3-------------

// let arrayDePalavras = ["Oi", "sumido", "tudo", "bem?", "Saudades"]
// let frase = ""

// for(let palavra of arrayDePalavras){
//     frase = frase + (palavra + " ")
//     // frase += palavra + " "
// }

// console.log(frase)

// for(let posicao = 0; posicao < arrayDePalavras.length; posicao++) {
//     let palavra = arrayDePalavras[posicao]
//     frase = frase + (palavra + " ")
// }