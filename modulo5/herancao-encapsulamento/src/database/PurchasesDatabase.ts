import { Purchase, PurchaseDB } from "../models/Purchase";
import { BaseDatabase } from "./BaseDatabase";
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "./tableNames";

export class PurchasesDatabase extends BaseDatabase {
  public async createPurchases(newPurchases: PurchaseDB) {
    await PurchasesDatabase.connection(TABLE_PURCHASES).insert(newPurchases);
  }
  public async getAllPurchases() {
    const result = await PurchasesDatabase.connection(TABLE_PURCHASES).select();
    return result;
  }
  public async getPurchases(id: string) {
    const [result] = await PurchasesDatabase.connection.raw(`
        SELECT
            ${TABLE_USERS}.email,
            ${TABLE_PRODUCTS}.name AS product_name,
            ${TABLE_PRODUCTS}.price AS product_price,
            ${TABLE_PURCHASES}.quantity AS product_quantity,
            ${TABLE_PURCHASES}.total_price
        FROM ${TABLE_PURCHASES}
        JOIN ${TABLE_USERS}
        ON ${TABLE_PURCHASES}.user_id = ${TABLE_USERS}.id
        JOIN ${TABLE_PRODUCTS}
        ON ${TABLE_PURCHASES}.product_id = ${TABLE_PRODUCTS}.id
        WHERE ${TABLE_PURCHASES}.user_id = ${id};
        `);
    return result;
  }
}
