import { Movie } from "../types/Movie";
import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_MOVIE";

  async create({ id, title, description, duration, release}: any): Promise<void> {
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

  findMovies = async (): Promise<Movie[]> => {
    try {
      const movies: Movie[] = [];

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
