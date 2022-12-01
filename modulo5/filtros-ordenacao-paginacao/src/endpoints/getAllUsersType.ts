import { Request, Response } from "express"
import {selectAllUsersType} from "./queryEndpoint";

export const getAllUsersType = async(req: Request,res: Response): Promise<void> =>{
    try {
       const type = req.params.type as string;
       const users = await selectAllUsersType(type)
 
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