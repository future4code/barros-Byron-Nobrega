import { connection } from "../data/connect"

export default async function selectAllUsers():Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `)
 
    return result[0]
 }

 export async function selectAllUsersName(name:string):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio WHERE name = "${name}";
    `)
 
    return result[0]
 }

 export async function selectAllUsersType(type:string):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio WHERE type = "${type}";
    `)
 
    return result[0]
 }
 export async function selectAllUsersOrder(type:string, order:string):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio WHERE type LIKE "%${type}%" ORDER BY ${order} ASC;
    `)
 
    return result[0]
 }
 export async function selectAllUsersOffset(page:number):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio LIMIT 5 OFFSET ${page};
    `)
 
    return result[0]
 }