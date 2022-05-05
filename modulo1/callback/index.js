//Exercícios de interpretação de código
//1)
/* //a) O que vai ser impresso no console?
Vai ser impresso 3 objetos e em cada um
deles 3 Array do mesmo tamanho do que o original */

//2)
/* //a) O que vai ser impresso no console?
Sera impresso um array com os nomes que se encontran 
dentro dos objetos */

//3)
/* //a) O que vai ser impresso no console?
Sera impresso os objetos que tenham o 
apelido diferentes de "Chijo" */

//Exercícios de escrita de código
//1)

const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

//a)
/* const nomePets = pets.map((nome, index, array) => {
    return nome.nome
})
console.log(nomePets); */

//b)
/* const petSalsicha = pets.filter((raca, index, array) => {
    return raca.raca === "Salsicha"
})
console.log(petSalsicha); */

//c)
/* const mensagemPoodles = pets.filter((raca, index, array) => {
    return raca.raca === "Poodle"
})
const nomeMensagem = mensagemPoodles.map((nome, index, array) => {
    return `Você ganhou um cupom de desconto de 10% 
    para tosar o/a ${nome.nome}!`
})
console.log(nomeMensagem); */

//2)
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//a)
/* const nomeItens = produtos.map((produto, index, array) => {
    return produto.nome
})
console.log(nomeItens); */

//b)
/* const descontoProduto = produtos.map((preco, index, array) => {
    const novobjeto = {
        nome: preco.nome,
        preco: (preco.preco - (preco.preco * 0.05)).toFixed(2)
    }

    return novobjeto
})
console.log(descontoProduto); */

//c)
/* const bebidas = produtos.filter((categorio) => {
    return categorio.categoria === "Bebidas"
})
console.log(bebidas); */

//d)
/* const objetosYpe = produtos.filter((item) => {
    return item.nome.includes("Ypê")
})
console.log(objetosYpe) */

//e)
/* const objetosYpe = produtos.filter((item) => {
    return item.nome.includes("Ypê")
})
const frase = objetosYpe.map((nome) => {
    return `Compre ${nome.nome} Ypê por R$${nome.preco}`
})

console.log(frase); */

//Desafios
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

//a)
/* const nomePokemon = pokemons.map((nome) => {
    return nome.nome
})
console.log(nomePokemon.sort()); */

//b)
const tipoPokemon = pokemons.map((tipo) => {
    return tipo.tipo
})
const semDuplicidade = tipoPokemon.filter(function(nome, nomeDuplicado) {
    return tipoPokemon.indexOf(nome) == nomeDuplicado
})

console.log(semDuplicidade);