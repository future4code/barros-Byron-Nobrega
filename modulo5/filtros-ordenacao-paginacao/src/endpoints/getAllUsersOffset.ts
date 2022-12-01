import { Request, Response } from "express"
import {selectAllUsersOffset} from "./queryEndpoint";

export const getAllUsersOffset = async(req: Request,res: Response): Promise<void> =>{
    try {
      const offset = Number(req.query.offset);
       const users = await selectAllUsersOffset(offset)
 
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