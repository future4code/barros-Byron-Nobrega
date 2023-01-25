import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { userInputDTO } from "../model/UserDTO";

export class UserController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const input: userInputDTO = { 
        name: req.body.name, 
        email: req.body.email, 
        password: req.body.password 
      }

      const userBusiness = new UserBusiness();
      await userBusiness.create(input);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
    }
  }

  findUser = async (req: Request, res: Response):Promise<void>=>{
    try {

      const userBusiness = new UserBusiness();
      const result = await userBusiness.findUser();
      res.status(200).send(result);

    } catch (error:any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
    }
    
  }

}
