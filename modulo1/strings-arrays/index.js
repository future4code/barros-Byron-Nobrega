//Exec. 1

/* 
a.  undefined
b.  null
c.  11
d.  3
e.  Array(11)
f.  9 */

//Exec. 2

/* Qual será o valor impresso no console se a entrada 
do usuário for: "Subi num ônibus em Marrocos"?
SUBI NUM ONIBUS EM MIRROCOS */

/* let nome = prompt("Qaul seu nome?")
let email = prompt("Qual o seu email?")
console.log(`O e-mail ${email} foi cadastrado com sucesso. 
Seja bem-vinda(o), ${nome}!`); */

/* let comidas = ["pipoca", "pamonha", "bolo", "arroz", "fejao"]
console.log(`Essas são as minhas comidas preferidas: 
${comidas[0]}
${comidas[1]}
${comidas[2]}
${comidas[3]}
${comidas[4]}
`);

let comida = prompt("Qual a sua comida favorita?")
comidas.splice(1,0,comida)
console.log(`Essas são as minhas comidas preferidas: 
${comidas[0]}
${comidas[1]}
${comidas[2]}
${comidas[3]}
${comidas[4]}
`); */

//Exec. 3

/* let listaDeTarefas = []

let tarefa1 = prompt("Qaul a 1º tarefa do dia:")
let tarefa2 = prompt("Qaul a 2º tarefa do dia:")
let tarefa3 = prompt("Qaul a 3º tarefa do dia:")

listaDeTarefas.push(tarefa1,tarefa2,tarefa3)
console.log(`tarefas: ${listaDeTarefas}`);

let fazer =prompt(`Selecione o número da tarefa finalizada: 0, 1 ou 2`)
let removido = listaDeTarefas.splice(fazer,1)

console.log(`O Tarefa retirada foi: ${removido}`)

console.log(listaDeTarefas); */


//Desafio:

/* let frase = prompt("Digite a Frase")
let arrayFrase = frase.split(" ")
console.log(arrayFrase); */


/* let array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let abacaxi = array.indexOf("Abacaxi")


console.log(`${abacaxi} 
${array.length}`); */
