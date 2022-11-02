import * as t from "./types"

export const addProduct = (dataProduct:t.Product, name:string, price:number )=>{
    const productNew:t.Product[] = [dataProduct]
    productNew.push({
        id:Date.now().toString(),
        name,
        price
    })
    return productNew
}