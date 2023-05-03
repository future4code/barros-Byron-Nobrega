const somaNum = (numero:number, aux:number = 0):number => {
    if(numero === 0){
        return aux;       
    }
    return somaNum(numero-1, aux+numero);
}

console.log(somaNum(10));