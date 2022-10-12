import { colorTerminal } from "../colorterminal";

//a) Responda como comentário no seu código: 
//como fazemos para acessar os parâmetros passados na linha de comando para o Node?
//usamos o process.argv passando a posição.

//b)
const nameUsers = process.argv[2]
const age  = Number(process.argv[3])

if (nameUsers&&age) {
    console.log("\x1b[32m",`Olá, ${nameUsers}! Você tem ${age} anos.`,"\x1b[0m");
    //c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.
    console.log("\x1b[32m",`Olá, ${nameUsers}! Você tem ${age} anos. Em sete anos você terá ${age+7}`,"\x1b[0m");
    
} else {
    console.log("\x1b[31m","Esperava 2 parâmetros só recebi um.","\x1b[0m");
}