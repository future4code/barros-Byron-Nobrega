import { User } from "./types/types";

export const shopping = (input:User, shopping:number)=>{
    const {name, balance} = input;
    if(balance >= shopping){
        return {
            name,
            balance:balance-shopping
        }
    
    }
    return undefined;
}