import { shopping } from "../src/shopping"
import { User } from "../src/types/types"

test("Test balance greater",()=>{
    const user: User ={
        name:"Byron",
        balance: 100
    }
    const result = shopping(user,40)
    expect(result).toEqual({
        name: "Byron",
        balance: 60
    })
})
test("Test equal balance",()=>{
    const user: User ={
        name:"Byron",
        balance: 100
    }
    const result = shopping(user,100)
    expect(result).toEqual({
        name: "Byron",
        balance: 0
    })
})
test("Test lower balance",()=>{
    const user: User ={
        name:"Byron",
        balance: 100
    }
    const result = shopping(user,110)
    expect(result).not.toBeDefined();
})
