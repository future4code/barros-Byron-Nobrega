const sequenciaNum = (numero:number) => {
    if(numero >= 0){
        sequenciaNum(numero-1);
        console.log(numero)        
    }
}

sequenciaNum(100);

const decrecenteNum = (numero:number) => {
    if(numero >= 0){
        console.log(numero)  
        decrecenteNum(numero-1);
    }
}

decrecenteNum(100);