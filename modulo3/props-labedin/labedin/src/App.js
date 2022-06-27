import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import ImagemButton from "./components/ImagemButton/ImagemButton";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://lh3.googleusercontent.com/pw/AM-JKLWEBAweDDF1dol7ZVjrQeYHi0bIE-eelu97PbUPAMv-bffR78MhrRqeVt6NkxgUFiZMjSzOm_QWMHa0YRuDwSUlZupt-hEeskZeW8BvEcksNU2_cBqhJFB6l1hkfpucfFzOO-L0a4tXFsV4OgIwG4AIPA=w488-h657-no?authuser=0"
          nome="Byron Smith"
          descricao="Oi, eu sou o Byron Smith. Sou TI do Supermercado Paulino. Adoro trabalhar com tecnologia e serei um futura desenvolvedor Fullstack ."
        />

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="data:image/png;base64,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"
          tipo="Email:"
          descricao="byronsmith@labenu.com.br"
        />
      </div>
      <div className="page-section-container">
        <CardPequeno
          imagem="https://i.pinimg.com/564x/cb/dc/54/cbdc54feb9a9d3b062b99fd0b400ba5b.jpg"
          tipo="Endereço: "
          descricao=" Rua Brasil n°01"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://cmspim.cogna.digital/unopar/public/2021-07/logo-unopar.png"
          nome="Unopar"
          descricao="Formado em Analise e desenvolvimento de sistemas turma 2022"
        />

        <CardGrande
          imagem="https://www.metropoledigital.ufrn.br/portal/assets/images/nova-marca/1A-Primaria-Gradiente.svg"
          nome="IMD"
          descricao="Monitor e instrutor de turma."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
