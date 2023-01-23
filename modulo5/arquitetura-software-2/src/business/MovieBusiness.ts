import { v4 as generateId } from 'uuid'
import { Movie } from "../types/Movie"
import { MovieDatabase } from "../data/movieDatabase"

export class MovieBusiness {
  async create({title, description, duration, release }: any):Promise<void> {
    if (!title || !description || !duration || !release) {
      throw new Error("Dados inválidos (title, description, duration_in_minutes, year_of_release)")
    }

    const id = generateId()

    const movieDatabase = new MovieDatabase();
    
    await movieDatabase.create({
      id,
      title,
      description,
      duration,
      release
    })
  }

  findUser = async ():Promise<Movie[]>=>{
    const movieDatabase = new MovieDatabase();
    const result = await movieDatabase.findMovies();
    return result;
  }

}
