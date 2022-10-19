
//a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros
//a entrada é um array de números. a saída é um objeto com o maior o menor e a media dos números de array

type Estatistícas = {
    maior:number,
    menor:number,
    media:number
}


function obterEstatisticas(numeros:number[]):Estatistícas {

    const numerosOrdenados:number[] = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:Estatistícas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}


//b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas 
// temos do type number o array a  variável soma e o objeto


//c) Crie um *type* chamado **amostra** de dados, isto é, um objeto com as propriedades **numeros** e **obterEstatisticas**. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:
type Amostra ={
    numeros:number[],
    obterEstatisticas:(numeros:number[])=>Estatistícas
}

/* const estatistica:Amostra = {
    numeros:[21,30,50,52,700],
    obterEstatisticas:obterEstatisticas(estatistica.numeros)

}
 */

