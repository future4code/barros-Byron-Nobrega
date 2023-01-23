import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";

export class MovieController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const { title, description, duration, release } = req.body;

      const movieBusiness = new MovieBusiness();
      await movieBusiness.create({ title, description, duration, release });

      res.status(201).send({ message: "Filme cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  findUser = async (req: Request, res: Response):Promise<void>=>{
    try {

      const movieBusiness = new MovieBusiness();
      const result = await movieBusiness.findUser();
      res.status(200).send(result);

    } catch (error:any) {
      res.status(400).send(error.message);
    }
    
  }

}
