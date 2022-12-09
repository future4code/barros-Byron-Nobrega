import { User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";
import { TABLE_USERS } from "./tableNames";

export class UserDatabase extends BaseDatabase {
   
    public static createUsers = async(newUser:User)=>{
       await UserDatabase.connection(TABLE_USERS).insert(newUser); 
    }
    public static getAllUsers = async()=>{
        const result = await UserDatabase.connection(TABLE_USERS).select();
        return result
    }
    public static getUserById = async(id:number) =>{
        const result = await UserDatabase.connection(TABLE_USERS)
        .select()
        .where(`id = "${id}"`);
        return result
    }

}