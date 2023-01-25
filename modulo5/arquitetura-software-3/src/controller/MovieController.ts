import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";
import { MovieDTO } from "../model/MovieDTO";

export class MovieController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const input: MovieDTO =  { 
        title: req.body.title, 
        description: req.body.description, 
        duration: req.body.duration, 
        release: req.body.release
       };

      const movieBusiness = new MovieBusiness();
      await movieBusiness.create(input);

      res.status(201).send({ message: "Filme cadastrado com sucesso" });
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
    }
  }

  findUser = async (req: Request, res: Response):Promise<void>=>{
    try {

      const movieBusiness = new MovieBusiness();
      const result = await movieBusiness.findMovie();
      res.status(200).send(result);

    } catch (error:any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
    }
    
  }

}
