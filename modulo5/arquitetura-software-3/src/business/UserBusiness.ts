import { UserDatabase } from "../data/UserDatabase"
import { EmailExist, ErrorUser } from "../error/ErrorUser";
import { InsertUserInputDTO, userInputDTO } from "../model/UserDTO"
import { generateId } from "../services/GenerateId";

export class UserBusiness {
  async create(input: userInputDTO):Promise<void> {
    const {name, email, password} = input;
    if (!name ||!email || !password) {
      throw new ErrorUser();
    }

    const userDatabase = new UserDatabase();
    const userBase = await userDatabase.findUser();
    const existUser = userBase.findIndex((user)=>{
      return user.email === email
    })

    if(existUser != -1){
      throw new EmailExist();
    }

    const id = generateId();
    const user:InsertUserInputDTO = {id, name, email, password}
    await userDatabase.create(user);
  }

  findUser = async ():Promise<InsertUserInputDTO[]>=>{
    const userDatabase = new UserDatabase();
    const result = await userDatabase.findUser();
    return result;
  }

}
