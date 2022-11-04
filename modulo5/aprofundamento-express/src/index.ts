import express, {Request,Response} from "express"
import cors from "cors"
import * as t from "./data" 
import * as func from "./function"
const app = express()

app.use(express.json())

app.use(cors())

app.get("/ping", (req:Request, res:Response) => {          
    res.send("Pong! 🏓")
});

app.get("/to_dos",(req:Request, res:Response)=>{
    res.status(200).send(t.to_dos)
 });

app.get("/to_dos/:completed",(req:Request, res:Response)=>{
    let completed:any = req.params.completed
    if(completed==="true"){ 
        completed = true
    }else if(completed==="false"){
        completed = false
    }else{
        res.status(400).send("param é obrigatório")
    }
    const to_dosTask = t.to_dos.filter((tasks)=>{
        return tasks.completed===completed
    })
    
    res.status(200).send(to_dosTask)
});

app.put("/to_dos/addtask",(req:Request, res:Response)=>{
     const { userId,id,title,completed} = req.body
    console.log(req.body);
    
    if (!userId||!id||!title) {
        res.status(400).send("Favor verificar body")
    }
    const taskadd = func.addTask(t.to_dos,userId,id,title,completed)
    res.status(200).send(taskadd)
});
 

app.listen(3003,()=>{
    console.log("Servidor ativo porta http://localhost:3003");
    
})