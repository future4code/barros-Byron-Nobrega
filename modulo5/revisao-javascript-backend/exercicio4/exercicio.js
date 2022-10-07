console.log("exercicio 4");

const primeiraLista = [
  {
    nome: "Banana",
  },
  {
    nome: "Laranja",
  },
];

const segundaLista = [
  {
    nome: "Laranja",
  },
  {
    nome: "Cebola",
  },
];

const grup = [...primeiraLista, ...segundaLista];
const removerDuplicidade = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i]['nome'] === arr[j]['nome']) {
        arr.splice(j, 1);
      }
    }
}
return arr;
};


console.log(removerDuplicidade(grup));
