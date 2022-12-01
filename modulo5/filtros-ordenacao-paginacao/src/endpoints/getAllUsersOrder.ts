import { Request, Response } from "express"
import {selectAllUsersOrder} from "./queryEndpoint";

export const getAllUsersOrder = async(req: Request,res: Response): Promise<void> =>{
    try {
       let type = req.query.type as string;
       let order:string = "type";
       
       if(!type){
         type="%"
         order = "email"
      }

       const users = await selectAllUsersOrder(type, order)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }