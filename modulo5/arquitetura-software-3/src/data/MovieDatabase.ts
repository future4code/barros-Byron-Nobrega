import { InsertMovieDTO } from "../model/MovieDTO";
import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_MOVIE";

  async create(input: InsertMovieDTO): Promise<void> {
    
    const { id, title, description, duration, release} = input;
        
    await MovieDatabase.connection
      .insert({
        id,
        title,
        description,
        duration_in_minutes:duration,
        year_of_release:release
      })
      .into(MovieDatabase.TABLE_NAME);
  }

  findMovies = async (): Promise<InsertMovieDTO[]> => {
    try {
      const movies: InsertMovieDTO[] = [];

      const result = await MovieDatabase.connection
        .select("*")
        .from(MovieDatabase.TABLE_NAME);

      for (let movie of result) {
        movies.push(movie);
      } 

      return movies;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
