enum Setores{
    marketing="marketing",
    vendas="vendas",
    financeiro="financeiro"
}

type Pessoas = {
    nome:string,
    salario:number,
    setor:Setores,
    presencial:boolean
}


const arrayPessoas: Array<Pessoas> =[
	{ nome: "Marcos", salario: 2500, setor: Setores.marketing, presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: Setores.vendas, presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: Setores.financeiro, presencial: true},
	{ nome: "João" ,salario: 2800, setor: Setores.marketing, presencial: false},
	{ nome: "Josué" ,salario: 5500, setor:Setores.financeiro, presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: Setores.vendas, presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: Setores.marketing, presencial: true }
]


function pessoasMarketing(arr:Array<Pessoas>):Array<Pessoas> {
    const marketing = arr.filter((item)=>{
     return item.setor ==="marketing" && item.presencial === true
    })
    return marketing
}


console.log(pessoasMarketing(arrayPessoas));
