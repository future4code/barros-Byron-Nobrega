import * as types from "./types"


export const addTask = (listTasks:types.To_dos[], userId: number, id: number, title: string,
    completed: boolean ):types.To_dos[]=>{
        const newTask:types.To_dos = {
            userId,
            id,
            title,
            completed
        }

        listTasks.push(newTask)
    return listTasks   
}