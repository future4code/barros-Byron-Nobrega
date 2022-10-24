

function dataSeparada(nome:string, data:string):string {
   const separar:string[]= data.split("/")



    return(`Olá me chamo ${nome}, nasci no dia ${separar[0]} do mês de ${separar[1]} do ano de ${separar[2]}`)
}

console.log(dataSeparada("byron","20/09/1983"));
