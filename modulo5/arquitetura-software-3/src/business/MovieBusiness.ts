import { MovieDatabase } from "../data/MovieDatabase"
import { ErrorMovie, MovieExist } from "../error/ErrorMovie";
import { InsertMovieDTO, MovieDTO } from '../model/MovieDTO';
import { generateId } from "../services/GenerateId";

export class MovieBusiness {

  async create(input: MovieDTO):Promise<void> {
    const {title, description, duration, release } = input;
    if (!title || !description || !duration || !release) {
      throw new ErrorMovie();
    }

    const movieDatabase = new MovieDatabase();

    const movieBase = await movieDatabase.findMovies();
    const existMovie = movieBase.findIndex((movie)=>{
      return movie.title === title
    })

    if(existMovie != -1){
      throw new MovieExist();
    }

    const id:string = generateId();

    const movie:InsertMovieDTO = {id, title, description, duration, release }
    await movieDatabase.create(movie)
  }

  findMovie = async ():Promise<InsertMovieDTO[]>=>{
    const movieDatabase = new MovieDatabase();
    const result = await movieDatabase.findMovies();
    return result;
  }

}
