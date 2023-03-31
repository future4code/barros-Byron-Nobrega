const printArray = (obj:any[], index:number = obj.length - 1):any => {
    if(index >= 0){
        printArray(obj, index - 1);
        console.log(obj[index]);       
    }
}
 
const arrayNum = ["Início",2,3,"Byron",[1,5]]
printArray(arrayNum)