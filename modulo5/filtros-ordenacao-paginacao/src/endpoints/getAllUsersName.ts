import { Request, Response } from "express"
import {selectAllUsersName} from "./queryEndpoint";

export const getAllUsersName = async(req: Request,res: Response): Promise<void> =>{
    try {
       const name = req.query.name as string;
       const users = await selectAllUsersName(name)
 
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