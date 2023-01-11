import { Product } from "../models/Product";
import { BaseDatabase } from "./BaseDatabase";
import { TABLE_PRODUCTS } from "./tableNames";

export class ProductDatabase extends BaseDatabase {
    public static async createProduct(newProduct: Product){
        await ProductDatabase.connection(TABLE_PRODUCTS).insert(newProduct);
    }
    public static getAllProducts = async()=>{
        const result = await ProductDatabase.connection(TABLE_PRODUCTS).select();
        return result
    }
    public static getProducts = async(id:string)=>{
        const [result] = await ProductDatabase.connection.raw(`select * from Labe_Products where id = ${id}`);
        return result
    }
}