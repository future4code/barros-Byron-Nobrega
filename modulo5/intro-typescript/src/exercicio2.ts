const inputTheUser = require("readline-sync");



function imprimeTresCoresFavoritas() {
    const cor1: string = inputTheUser.question("Insira sua primeira cor favorita")
    const cor2: string = inputTheUser.question("Insira sua segunda cor favorita")
    const cor3: string = inputTheUser.question("Insira sua terceira cor favorita")
    const cores: string[] =[cor1, cor2, cor3]
    console.log(cores)
 }


 imprimeTresCoresFavoritas();