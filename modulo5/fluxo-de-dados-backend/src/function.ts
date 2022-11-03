import * as t from "./types"

export const addProduct = (dataProduct:t.Product[], name:string, price:number ):t.Product []=>{
    const productNew:t.Product ={
        id:Date.now().toString(),
        name,
        price
    }
     dataProduct.push(productNew) 
    
    return dataProduct
}

export const priceEdit = (dataProduct:t.Product[],id:string,price:number)=>{
    const newProduct:t.Product[] = [...dataProduct]
    for (let i = 0; i < dataProduct.length; i++) {
        if (dataProduct[i].id === id) {
            dataProduct[i].price = price
        }
    }
    return newProduct
}

export const deleteProduct = (dataProduct:t.Product[],id:string)=>{
    const newProduct:t.Product[] = [...dataProduct]
    for (let i = 0; i < newProduct.length; i++) {
        if (newProduct[i].id === id) {
            newProduct.splice(i,1)
        }
    }
    return newProduct
}