import { UserDatabase } from "../data/UserDatabase"
import { v4 as generateId } from 'uuid'
import { User } from "../types/User"

export class UserBusiness {
  async create({ email, name, password }: any):Promise<void> {
    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password)")
    }

    const id = generateId()

    const userDatabase = new UserDatabase();
    await userDatabase.create({
      id,
      name,
      email,
      password
    })
  }

  findUser = async ():Promise<User[]>=>{
    const userDatabase = new UserDatabase();
    const result = await userDatabase.findUser();
    return result;
  }

}