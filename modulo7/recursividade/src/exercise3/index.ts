const somaInterativa = (numero:number):number => {
    let aux = 0;
    for (let i = 0; i <= numero; i++) {
         aux += i;
    }
     
     return aux
 }
 
 console.log(somaInterativa(10));