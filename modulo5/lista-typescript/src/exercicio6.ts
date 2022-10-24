type Conta = {
  cliente: string;
  saldoTotal: number;
  debitos: Array<number>;
};
const listContas: Array<Conta> = [
  { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, debitos: [] },
];

function clientesNegativos(arr: Array<Conta>): Array<Conta> {
  const newConta = [...arr];
  for (let i = 0; i < arr.length; i++) {
    const initVar = 0;
    newConta[i].saldoTotal = arr[i].saldoTotal - arr[i].debitos.reduce((prev, current) => prev + current, initVar);
    newConta[i].debitos = [];
  }
  const listNegativados = newConta.filter((item) => item.saldoTotal < 0);

  return listNegativados;
}

console.log(clientesNegativos(listContas));
