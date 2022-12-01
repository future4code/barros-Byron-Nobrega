import express, {Request,Response} from "express"
import connection from './dataBase/connection'
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.get("/actor",async(req:Request, res:Response):Promise<void>=>{
    let errCode = 400
    let result;   
     try {
        const name = req.query.name;
       if(!name){
            result = await connection.raw(
             `select * from Actor`
         )
            
        }else{
             result = await connection.raw(
               `SELECT * FROM Actor WHERE name = "${name}"`
             )
            }
         res.status(200).send(result[0][0])
     } catch (error:any) {
         res.status(errCode).send(error.message)
     }
 })

 app.get("/actor/gender",async(req:Request, res:Response):Promise<void>=>{
   let errCode = 400
  
    try {
        const gender = req.query.gender
        if(!gender){
            errCode =402;
            throw new Error(" Verifique o query params gender")
        }
        const result = await connection.raw(
            `SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"`
         )
        res.status(200).send(result[0][0])
    } catch (error:any) {
        res.status(errCode).send(error.message)
    }
})

app.get("/actor/:gender",async(req:Request, res:Response):Promise<void>=>{
    let errCode = 400
   
     try {
         const gender = req.params.gender
         if(!gender){
             errCode =402;
             throw new Error(" Verifique o query params gender")
         }
         const result = await connection.raw(
             `SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"`
          )
         res.status(200).send(result[0][0])
     } catch (error:any) {
         res.status(errCode).send(error.message)
     }
 })

app.get("/actor/average/salary",async(req:Request, res:Response):Promise<void>=>{
    let errCode = 400
   
     try {
         const gender = req.query.gender
         if(!gender){
             errCode =402;
             throw new Error(" Verifique o query params gender")
         }
         const result = await connection("Actor")
         .avg("salary").where({gender})
         res.status(200).send(result[0])
     } catch (error:any) {
         res.status(errCode).send(error.message)
     }
 })

app.put("/actor/updateSalary/:id",async(req:Request, res:Response):Promise<void>=>{
    let errCode = 400
   
     try {
         const id = Number(req.params.id)
         const {salary} = req.body
         if(!salary){
            errCode =402;
            throw new Error(" Verifique o body salary")
         }
         const result = await connection("Actor")
         .update({
             salary:salary
         })
         .where("id", id);
         res.status(200).send("Atualizado com sucesso!")
     } catch (error:any) {
         res.status(errCode).send(error.message)
     }
 })

 app.put("/actor/delete/:id",async(req:Request, res:Response):Promise<void>=>{
    let errCode = 400
   
     try {
         const id = Number(req.params.id)
         await connection.raw(`SET foreign_key_checks = 0;`)
         const result = await connection("Actor")
         .delete()
         .where("id", id);
         res.status(200).send("Deletado com sucesso!")
     } catch (error:any) {
         res.status(errCode).send(error.message)
     }
 })

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});