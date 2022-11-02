import express, {Request,Response} from "express"

import cors from 'cors'

import * as data from "./data"

import * as func from "./function"

const app = express()

app.use(express.json())

app.use(cors())


app.get("/test",(req:Request,res:Response)=>{
    res.status(200).send("Servidor rodando na porta 3003")
});

app.post("/product/newproduct",(req:Request,res:Response)=>{
    const {name,price} = req.body
    if(!name||!price){
        res.status(400).send("Verifique os parametros")
    }
    func.addProduct(data.tableProduct,name,price);
});

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});