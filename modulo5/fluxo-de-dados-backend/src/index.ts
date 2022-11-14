import express, { Request, Response } from "express";

import cors from "cors";

import * as data from "./data";

import * as func from "./function";

const app = express();

app.use(express.json());

app.use(cors());

app.get("/test", (req: Request, res: Response) => {
  res.status(200).send("Servidor rodando na porta 3003");
});

app.get("/product", (req: Request, res: Response) => {
  res.status(200).send(data.tableProduct);
});

app.post("/product/newproduct", (req: Request, res: Response) => {
  let erroCode = 400;
  try {
    const { name, price } = req.body;

    if (typeof name != "string" || isNaN(price) || price <= 0) {
      erroCode = 402;
      throw new Error("Verifique os parametros do body, name e price");
    }

    const arrayProduct = func.addProduct(data.tableProduct, name, price);
    res.status(200).send(arrayProduct);
  } catch (error: any) {
    res.status(erroCode).send(error.Mensagem);
  }
});

app.put("/product/delete/:id", (req: Request, res: Response) => {
  let erroCode = 400;
  try {
    const idprod = req.params.id;
    const productDelete = data.tableProduct.find((product)=>{
        return product.id === idprod;
    })

    if (!idprod || !productDelete) {
        erroCode = 402;
        throw new Error("Verifique o query params");
    }

    const deleteProduct = func.deleteProduct(data.tableProduct, idprod);
    res.status(200).send(deleteProduct);
  } catch (error: any) {
    res.status(erroCode).send(error.Mensagem);
  }
});

app.put("/product/editPrice", (req: Request, res: Response) => {
  let erroCode = 400;
  try {
    const idProduct = String(req.query.id);
    const priceProduct = req.body.price;

    if (
      !idProduct ||
      !priceProduct ||
      isNaN(priceProduct) ||
      priceProduct <= 0
    ) {
      erroCode = 402;
      throw new Error("Verifique o query params");
    }

    const productArray = func.priceEdit(
      data.tableProduct,
      idProduct,
      priceProduct
    );
    res.status(200).send(productArray);
  } catch (error: any) {
    res.status(erroCode).send(error.Mensagem);
  }
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
