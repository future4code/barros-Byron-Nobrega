import express, { Request, Response } from "express";

import cors from "cors";

import * as data from "./data";

import * as func from "./function";
import { log } from "console";

const app = express();

app.use(express.json());

app.use(cors());

app.get("/users", (req: Request, res: Response) => {
  res.status(200).send(data.users);
});

app.get("/users/name", (req: Request, res: Response) => {
    let errCode = 400;
    try {
      const nameUser = req.query.name;
     
      if (!nameUser || typeof nameUser != "string") {
        errCode = 402;
        throw new Error("name is required");
      }
      const userListName = func.listUserName(data.users, nameUser);
      if (userListName.length === 0) {
        errCode = 403;
        throw new Error("Name user not found: " + nameUser);
      }
      res.status(200).send(userListName);
    } catch (error: any) {
      res.status(errCode).send(error.message);
    }
  });

app.get("/users/:type", (req: Request, res: Response) => {
  let errCode = 400;
  try {
    const typeUser = req.params.type;
         
    if (typeUser === ":type" || typeof typeUser != "string") {
      errCode = 402;
      throw new Error("type is required");
    }
    const userList = func.userType(data.users, typeUser.toLocaleUpperCase());
        
    if (userList.length === 0) {
      errCode = 403;
      throw new Error("Type user not found: " + typeUser);
    }

    res.status(200).send(userList);
  } catch (error: any) {
    res.status(errCode).send(error.message);
  }
});

app.post("/users/addUser",(req:Request,res:Response)=>{
    let errCode = 400
    try {
        const {name,email,type,age} = req.body;
        if (!name || typeof name!= "string" || !email || typeof email!= "string" || isNaN(age) || !type) {
            errCode = 402;
            throw new Error("body is required");
        }
        if(type.toLocaleUpperCase() !== "ADMIN" && type!=="NORMAL"){
            errCode = 402;
            throw new Error("type is required, ADMIN or NORMAL");
        }
        const arrayUser = func.addNewUser(data.users, name, email,type.toLocaleUpperCase(),age);
        res.status(200).send(arrayUser)
    } catch (error:any) {
        res.status(errCode).send(error.message);
    }
})

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
