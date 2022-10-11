console.log("exercicio 3");

const contas = [
  {
    email: "astrodev@labenu.com",
    password: "abc123",
  },
  {
    email: "bananinha@gmail.com.br",
    password: "bananinha",
  },
];

let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function login(email, senha) {
  if (regex.test(email) === false) {
    console.log("e-mail inválido");
  } else if (senha.length < 6) {
    console.log("senha deve possuir no mínimo 6 caracteres");
  } else {
    const chequeLogin = contas.findIndex(
      (item) => item.email === email && item.password === senha
    );
    if (chequeLogin === -1) {
      console.log("e-mail ou senha incorretos");
    } else {
      console.log(`login bem-sucedido`);
    }
  }
}

login("", "bananinha");
login("astrodev@labenu.com", "bananinha");
login("bananinha@gmail.com.br", "bananinha");
