import { BaseDatabase } from "./BaseDatabase";

export class Migration extends BaseDatabase {
  createTables = async () => {
    try {
      await Migration.connection
      .raw(`
        CREATE TABLE IF NOT EXISTS User_Arq (
           id VARCHAR(255) PRIMARY KEY NOT NULL, 
           name VARCHAR(255) NOT NULL,
           email VARCHAR(255) UNIQUE NOT NULL,
           password VARCHAR(255) NOT NULL,
           role enum('NORMAL', 'ADMIN') NOT NULL DEFAULT 'NORMAL'
        );     
             
      `)
      } catch (error: any) {
      throw new Error(error.message);
    }
  };
}

const printError = (error: any) => {
  console.log(error.sqlMessage || error.message);
};
