//add um caractere no final da string
//remover um caractere no final da string
//substituir um caracter por outro 
//compara uma string com ele mesma 

const oneEdit = (primeiro:string, segundo:string):Boolean =>{
   
    if((segundo.length - primeiro.length)>1 || (segundo.length - primeiro.length)<-1){
       return false
    }
    
    let count = 0
    
    for (let i = 0; i < primeiro.length; i++) {
        if (primeiro[i] !== segundo[i]){
            count++
        } 
    }

		// Retorna true se a diferença é 1, false caso contrário
    return count === 1
   
}

console.log(oneEdit("byron", "byro"))