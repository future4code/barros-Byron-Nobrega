import connection from "./connection"
const createTables = async () => {
    await connection.raw(`
SET FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS Case_Products, Case_Clients, Case_Orders;

CREATE TABLE Case_Clients (
    id INT AUTO_INCREMENT NOT NULL primary key,
  name varchar(255) unique
  );
CREATE TABLE Case_Products (
  id INT AUTO_INCREMENT NOT NULL primary key,
  name varchar(255),
  price float ,
  qty_stock INT
);
CREATE TABLE Case_Orders (
  id INT AUTO_INCREMENT NOT NULL primary key,
  order_data date,
  delivery_date DATE,
  qty int,
  fk_client INT,
  fk_product INT,
  FOREIGN KEY (fk_client) REFERENCES Case_Clients (id),
  FOREIGN KEY (fk_product) REFERENCES Case_Products (id)
);
SET FOREIGN_KEY_CHECKS=1;
`)
    .then(() => {
        console.log(`Tables created successfully!`)
        
    })
    .catch((error: any) => printError(error))
}

const printError = (error: any) => {
    console.log(error.sqlMessage || error.message)
}

createTables()