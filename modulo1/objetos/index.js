// Exercícios de interpretação de código
/* //1)
"Matheus Nachtergaele"
"Virginia Cavendish"
{canal: "Globo", horario: "14h"} */

/* //2)
a)
nome: "Juca", dade: 3, raca: "SRD"
nome: "Juba", dade: 3, raca: "SRD"
nome: "Jubo", dade: 3, raca: "SRD"

b) 
Ele espelha todo os atributos do metudo 
tipo fazendo uma copia  */

/* //3)
a)
false
undefined

b)
O false é porque o atributo backender do objeto pessoa 
tem este valor, como a função esta pegando ele é impresso.
O undefined é que no objeto não existe o atributo altura
como ele não foi definido logo tem o valor undefined. */

//Exercícios de escrita de código
/* //1)

const pessoa = {
    nome:"Byron",
    apelidos:["Baygon","Baratol","inseticida"]

}

const mensagem = function(objeto) {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} e ${pessoa.apelidos[2]}`);
    
 }

mensagem(pessoa) 

const pessoas = {
    ...pessoa,
    apelidos: ["Mata Barata","repelente","eliminador"]
}

const mensagem1 = function(objeto) {
    console.log(`Eu sou ${pessoas.nome}, mas pode me chamar de: ${pessoas.apelidos[0]}, ${pessoas.apelidos[1]} e ${pessoas.apelidos[2]}`);
    
 }
mensagem1(pessoas) */

//2)

/* const pessoa1 = {
    nome:"byron",
    idade: 38,
    proficao:"TI"
}

const pessoa2 = {
    nome:"Dany",
    idade: 37,
    proficao:"Vendedora"

}

const grupo = function(objeto1,objeto2) {

   console.log([
        pessoa1.nome,
        pessoa1.nome.length,
        pessoa1.idade,
        pessoa1.proficao,
        pessoa1.proficao.length
    ])
    console.log(
    [   pessoa2.nome,
        pessoa2.nome.length,
        pessoa2.idade,
        pessoa2.proficao,
        pessoa2.proficao.length

    ]
);
    
}

grupo(pessoa1[0],pessoa2[1]); */

//3)

/* let carrinho = []

const pinha ={
    nome:"pinha",
    disponibilidade:true
}

const caju ={
    nome:"cajú",
    disponibilidade:true

}
const manga ={
    nome:"manga",
    disponibilidade: true
}

const venda = function(fruta) {
    carrinho.push(fruta)
    
}

venda(pinha)
venda(caju)
venda(manga)

console.log(carrinho); */

// Desafios
//1)

/* const usuario = function(){
    this.nome = prompt(`Qual o seu nome?`)
    this.idade = Number(prompt(`Qual sua idade?`))
    this.proficao = prompt(`Qual sua Profição?`)
}
usuario();

const usuarioObjeto = {}
usuarioObjeto.nome = this.nome
usuarioObjeto.idade = this.idade
usuarioObjeto.proficao = this.proficao 

console.log(usuarioObjeto);
console.log(typeof usuarioObjeto); */

//2)
/* const filme1 = {
    
    nome:"Labenu",
    anoLancamento:2021

}

const filme2 ={
    nome:"Meu começo",
    anoLancamento:2021
}

const filmesFuncao = function(objeto1,objeto2) {
    antes = objeto1.anoLancamento < objeto2.anoLancamento
    noMesmoAno = objeto1.anoLancamento === objeto2.anoLancamento

    console.log(`
    O primeiro filme foi lançado antes do segundo? ${antes}
    O primeiro filme foi lançado no mesmo ano do segundo? ${noMesmoAno}

    `)
    
}

filmesFuncao(filme1,filme2) */

//3)
/* let carrinho = []

const pinha ={
    nome:"pinha",
    disponibilidade:true
}

const caju ={
    nome:"cajú",
    disponibilidade:true

}
const manga ={
    nome:"manga",
    disponibilidade: true
}

const venda = function(fruta) {
    carrinho.push(fruta)
    
}

venda(pinha)
venda(caju)
venda(manga)

const frutaDisponivel = function(fruta){
    fruta.disponibilidade = false

} 


frutaDisponivel(pinha)

console.log(carrinho); */