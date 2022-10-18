const inputUser = require("readline-sync")

const hipotenusa = inputUser.question("Qaul o valor da hipotenusa?")
const catetoOposto = inputUser.question("Qaul o valor do cateto oposto?")
const catetoAdjacente = inputUser.question("Qaul o valor da cateto adjacente?")


function checaTriangulo(a:number, b:number, c:number):string{
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }

  console.log(checaTriangulo(hipotenusa,catetoOposto,catetoAdjacente));
  