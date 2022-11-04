/* a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
*/
let minhaString:string = "byron"
//minhaString = 1
// o nolde avisa que se trata de uma variável do tipo string não podendo ser atribuido outro tipo de valor para ela.

//b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?
let meuNumero:number | string
meuNumero = "casa"
meuNumero = 1
// usando o Union ele permite que a variavel aceite mais de um tipo 


/*c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

`nome`, que é uma string;

`idade`, que é um número;

`corFavorita`, que é uma string.

Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.
*/
/*d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher entre as cores do arco-íris. Utilize um `enum` para isso. */

const pessoa:{nome:string,idade:number,coFavorita:string}={
    nome:"byron",
    idade:39,
    coFavorita:"branca"
}

type NewPessoa={
    nome:string,
    idade:number,
    corFavorita:corPessoa
}

enum corPessoa{
    laranja="Laranja",
    branco="Branco",
    Verde="Verde"
}

const pessoa1:NewPessoa={
    nome:"Bryan",
    idade:30,
    corFavorita:corPessoa.branco
}

const pessoa2:NewPessoa={
    nome:"Bruno",
    idade:11,
    corFavorita:corPessoa.Verde
}

