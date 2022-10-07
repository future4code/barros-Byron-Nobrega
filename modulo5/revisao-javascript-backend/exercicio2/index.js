console.log("exercício 2");

const clientes = [
  { id: 1, nome: "Fulano" },
  { id: 2, nome: "Ciclano" },
  { id: 3, nome: "Beltrano" },
  { id: 4, nome: "Fulana" },
];

function checarClienet(id, cliente) {
  const chequeId = clientes.findIndex((item) => item.id === id);
  console.log(chequeId);
  if (chequeId === -1) {
    clientes.push({ id, nome: cliente });
    console.log(clientes);
  } else {
    console.log(`Erro. Parâmetro inválido (${id} já existe).`);
  }
}

checarClienet(7, "Smith");
checarClienet(3, "Bryan");

/* -----------------Tabuada----------------------- */
console.log("-----------------Tabuada-----------------------");
const tabuada = [];

function tabuadaValor(valor) {
  if (11 > valor > 0) {
    for (let i = 0; i <= 10; i++) {
      tabuada.push(`${valor} x ${i} = ${valor * i}`);
    }
    console.log(tabuada);
  } else if (valor > 10) {
    console.log(
      "Erro. Parâmetro inválido (número precisa valer entre 1 e 10)."
    );
  } else {
    console.log(`Erro. Parâmetro inválido (deve ser um número).`);
  }
}

tabuadaValor(10);
