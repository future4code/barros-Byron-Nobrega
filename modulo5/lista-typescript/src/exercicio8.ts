function anagrama(palavra:string):number {
   let quantidadeLetras = palavra.length
    if(quantidadeLetras===1||quantidadeLetras===0){
        return 1
    }else{
        for (let i = quantidadeLetras - 1;i>=1; i--) {
            quantidadeLetras= quantidadeLetras*i;
        }

        return quantidadeLetras
    }
}


console.log(anagrama("Byr"));
