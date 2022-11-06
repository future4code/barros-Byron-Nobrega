import { randomInt } from 'crypto';
import * as types from './types';

export const userType = (arrayUser:types.User[],typeUser:string):types.User[]=>{
    const listUser = arrayUser.filter((type)=>{
        return type.type === typeUser;
    })
    return listUser
}

export const listUserName = (arrayUser:types.User[], nameUser:string):types.User[]=>{
    const userName = arrayUser.filter((user)=>{
        return user.name === nameUser
    })
    return userName
}

export const addNewUser = (arrayUser:types.User[], name:string,email:string,type:types.UserType,age:number):types.User[]=>{
    const newArrayUser:types.User[] = [...arrayUser]
    const newUser:types.User ={
        id:Math.random(),
        name,
        email,
        type,
        age
    }
    newArrayUser.push(newUser)
    return newArrayUser
}