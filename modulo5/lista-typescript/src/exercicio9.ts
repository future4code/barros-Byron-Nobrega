function validarCpf(cpf: string):boolean {
  const numberCpf = cpf.replace(".","").replace(".","").replace("-","")
  let soma = 0
  let resto

  for (let i = 1; i <= 9; i++) {
    soma = soma + parseInt(numberCpf.substring(i-1,i))*(11-i) 
  }
  resto = (soma*10)%11; 
  if((resto===10)||(resto===11)){
    resto=0;
  }
  if (resto!=parseInt(numberCpf.substring(9,10))){
    return false;
  }
  soma=0; 
   for (let i = 1; i <=10; i++) {
    soma = soma + parseInt(numberCpf.substring(i-1,i))*(12-i)
  }
  resto = (soma*10)%11
  if (resto===10||resto===11) {
    resto=0
  }
  if (resto!=parseInt(numberCpf.substring(10,11))){
    return false;
  } 
 
   return true
}

console.log(validarCpf("728.760.680-10"));
