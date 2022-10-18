const inputAno = require("readline-sync")

const ano: number = inputAno.question("Digite o ano para saber se é dissexto: ")

function checaAnoBissexto(ano: number) {
    const cond1: boolean = ano % 400 === 0
    const cond2: boolean = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
 }


 console.log(checaAnoBissexto(ano));
 