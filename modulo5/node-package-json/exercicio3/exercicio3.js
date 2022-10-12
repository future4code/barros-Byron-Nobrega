const tarefas= [
	"Lavar a louça",
	"Comprar Leite"
] 

const tarefa = process.argv[2]

const addTarefa = (tarefa)=>{
    const newTarefa =[]
    newTarefa.push([...tarefas, tarefa])
    console.log(`Tarefa adicionada com sucesso!`);
    return newTarefa
}

console.log("\x1b[32m",`${addTarefa(tarefa)}`,"\x1b[0m");
