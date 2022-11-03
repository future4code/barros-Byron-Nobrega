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

app.get("/product", (req:Request, res:Response)=>{
    res.status(200).send(data.tableProduct) 
})

app.post("/product/newproduct",(req:Request,res:Response)=>{
    const {name,price} = req.body
       
    if(!name||!price){
        res.status(400).send("Verifique os parametros")
    }
   
    const arrayProduct = func.addProduct(data.tableProduct,name,price);
    res.status(200).send(arrayProduct)
});

app.put("/product/delete/:id",(req:Request, res:Response)=>{
    const idprod = req.params.id
    if(!idprod){
        res.status(400).send("Verifique o query params")
    }

    const deleteProduct = func.deleteProduct(data.tableProduct,idprod)
    res.status(200).send(deleteProduct)
})

app.put("/product/editPrice",(req:Request, res:Response)=>{
    const idProduct = String(req.query.id);
    const priceProduct = req.body.price
    if(!idProduct||!priceProduct){
        res.status(400).send("Verifique o query params")
    }
    const productArray = func.priceEdit(data.tableProduct,idProduct,priceProduct)
    res.status(200).send(productArray)
})



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});