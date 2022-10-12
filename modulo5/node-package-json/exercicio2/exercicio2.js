const operacao = process.argv[2]
const n1 = Number(process.argv[3])
const n2 = Number(process.argv[4])


function add(valor1, valor2){
    return valor1+valor2
} 

const sub = (valor1, valor2)=>{
    return valor1 - valor2
}

const mult = (valor1, valor2)=>{
    return valor1*valor2
}

const div = (valor1, valor2)=>{
    return valor1/valor2
}

switch (operacao) {
   
    case "add":
        console.log("\x1b[32m",`Resposta: ${add(n1,n2)}`,"\x1b[0m")
        break;

    case "sub":
        console.log("\x1b[32m",`Resposta: ${sub(n1,n2)}`,"\x1b[0m")
        break;
    case "mult":
        console.log("\x1b[32m",`Resposta: ${mult(n1,n2)}`,"\x1b[0m")
        break;
    case "div":
        console.log("\x1b[32m",`Resposta: ${div(n1,n2)}`,"\x1b[0m")
        break;

    default:
        console.log("\x1b[31m",`desculpe, a operação ${operacao} não foi encontrada`,"\x1b[0m");
        break;
}