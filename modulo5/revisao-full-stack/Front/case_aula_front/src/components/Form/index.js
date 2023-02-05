import React from "react";
import { MyForm } from "./style";

export default function Form() {
  return (
    <MyForm>
      {/*cliente*/}
      <div>
        <label htmlFor="client">Nome do cliente</label>
        <input id="client" list="dataClient"></input>
        <datalist id="dataClient">
          <option>Byron</option>
          <option>Dane</option>
          <option>Dane</option>
          <option>Dane</option>
          <option>Dane</option>
        </datalist>
        <button>Confinmar</button>
      </div>

      {/*Produto */}
      <div>
        <label htmlFor="product">Produto</label>
        <input id="product" list="dataProduct"></input>
        <datalist id="dataProduct">
          <option>Banana</option>
          <option>maca</option>
          <option>Goiaba</option>
        </datalist>
        <label>Quantidade</label>
        <input id="qty" type="number"></input>
        <p>R$ 10,00</p>
        <button>ok</button>
      </div>
      {/*Pedido */}
      <div>
        <label htmlFor="deliveryDate">Data de Entrega (DD / MM / AAAA)</label>
        <input id="deliveryDate"></input>
        <button>Finalizar Pedido</button>
      </div>
    </MyForm>
  );
}
