//Exercícios de interpretação de código
//1)
/* Vai ser impresso 10 pois a variavel valor vai armazenar as interações de i */

//2)
/* a) O que vai ser impresso no console?
19
21
23
25
27
30

b) Se eu quisesse acessar o **índice** de cada elemento dessa lista,
 o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso? 
 SIM é possivel com a função keys().

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]

for (let numero of lista.keys()) {
    console.log(numero)


}*/
//3)
//*
//**
//***
//****

//Exercícios de escrita de código
//1)
/* let quantidadeBichinhos = Number(prompt("Quantos pets você tem?"))
const nomePets = []
let frase = " "
if (quantidadeBichinhos !== 0) {
    let numpet = 1
    for (let i = 0; i < quantidadeBichinhos; i++) {
        let petNome = prompt(`Qual o nome do seu ${numpet}º pet:`)
        nomePets.push(petNome)
        numpet++
    }
    for (let nomePet of nomePets) {
        frase += nomePet + ", "
    }

    console.log(`Você tem ${quantidadeBichinhos} pets
    que são : ${frase}`);
} else {
    console.log("Que pena! Você pode adotar um pet!");
} */

//2)
//arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
//A)
/* for (let i = 0; i < arrayOriginal.length; i++) {
  const element = arrayOriginal[i];
  console.log(element);
} */

//B)
/* for (let i = 0; i < arrayOriginal.length; i++) {
    const element = arrayOriginal[i];
    console.log(element / 10);
} */

//C)
/* const arrayPar = []
for (let i = 0; i < arrayOriginal.length; i++) {
const element = arrayOriginal[i];

if (element % 2 == 0) {
    arrayPar.push(element)
}

}
console.log(arrayPar); */

//D)
/* const arrayString = []
for (let i = 0; i < arrayOriginal.length; i++) {
    const element = arrayOriginal[i];
    arrayString.push(`O elemento do índex ${i} é: ${element}`)
}
console.log(arrayString); */

/* let maiorNumero = 0
let menorNumero = 100 ^ 1000

//E)
for (let i = 0; i < arrayOriginal.length; i++) {
    let numeroDoArray = arrayOriginal[i]
    if (numeroDoArray > maiorNumero) {
        maiorNumero = numeroDoArray
    }
    if (numeroDoArray < menorNumero) {
        menorNumero = numeroDoArray
    }
}
console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`); */

//Desafios

//1)

/* let numeroPrimeiroJogador = Number(prompt(`Digite o número para adivinhar:`))
console.log(`Vamos lá!`);
let tentativas = 0
let condicao

while (condicao !== numeroPrimeiroJogador) {
    condicao = Number(prompt(`Qual o seu chute?`))
    console.log(`O número chutado foi: ${condicao}`);
    tentativas++

    if (condicao > numeroPrimeiroJogador) {
        console.log(`Errou. O número escolhido é maior`);
    } else if (condicao < numeroPrimeiroJogador) {
        console.log(`Errou. O número escolhido é menor`);
    } else {

        console.log(`Acertou 
        O número de tentativas foi : ${tentativas}`);

    }


} */

//2)

/* let numeroPrimeiroJogador = Math.floor(100 * Math.random() + 1)
console.log(`Vamos lá!`);
let tentativas = 0
let condicao

while (condicao !== numeroPrimeiroJogador) {
    condicao = Number(prompt(`Qual o seu chute?`))
    console.log(`O número chutado foi: ${condicao}`);
    tentativas++

    if (condicao > numeroPrimeiroJogador) {
        console.log(`Errou. O número escolhido é maior`);
    } else if (condicao < numeroPrimeiroJogador) {
        console.log(`Errou. O número escolhido é menor`);
    } else {

        console.log(`Acertou 
        O número de tentativas foi : ${tentativas}`);

    }


} */

/* Quando resolver o exercício, pare e faça a seguinte reflexão: 
foi fácil fazer esta alteração? Sim foi

O que você poderia ter feito para que fosse mais fácil?
Como eu usei a função Math.floor() que retorna o menor número inteiro 
dentre o número "x" junto com a função Math.round que sorteia o número
foi bem tranquilo.  */