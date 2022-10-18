const inputNumero = require("readline-sync")

const numero1 = inputNumero.question("Digite o primeiro número: ")
const numero2 = inputNumero.question("Digite o segundo número: ")

function comparaDoisNumeros(num1:number, num2:number):number {
    let maiorNumero:number;
    let menorNumero:number;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca:number = maiorNumero - menorNumero;
  
    return diferenca 
  }

  console.log(comparaDoisNumeros(numero1, numero2));
  