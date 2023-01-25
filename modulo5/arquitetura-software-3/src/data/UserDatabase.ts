import { InsertUserInputDTO } from "../model/UserDTO";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";

  async create(input:InsertUserInputDTO): Promise<void> {
       
    await UserDatabase.connection
      .insert({
        id: input.id,
        name: input.name,
        email: input.email,
        password: input.password,
      })
      .into(UserDatabase.TABLE_NAME);
  }

  findUser = async (): Promise<InsertUserInputDTO[]> => {
    try {
      const users: InsertUserInputDTO[] = [];

      const result = await UserDatabase.connection
        .select("*")
        .from(UserDatabase.TABLE_NAME);

      for (let user of result) {
        users.push(user);
      }

      return users;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
