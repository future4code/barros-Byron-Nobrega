// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length

}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    //return array.reverse()
    const arrayInvertido = []
    for (let i = 0; i < array.length; i++) {
        arrayInvertido.unshift(array[i])

    }
    return arrayInvertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((x, y) => x - y);

}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const par = array.filter((item, index, array) => {
        return item % 2 === 0
    })
    return par

    /*   const par = []
        for (let i = 0; i < array.length; i++) {
            let ePar = array[i]
            if (ePar % 2 === 0) {
                par.push(ePar)
            }
        }
        return par */
}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const par = []
    for (let i = 0; i < array.length; i++) {
        let ePar = array[i]
        if (ePar % 2 === 0) {
            ePar *= ePar
            par.push(ePar)
        }
    }
    return par
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max(...array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let numero
    let diferenca
    let modulo
    if (num1 > num2) {
        numero = num1
        diferenca = num1 - num2
        modulo = num1 % num2 === 0
    } else {
        numero = num2
        diferenca = num2 - num1
        modulo = num2 % num1 === 0
    }
    doisnumeros = {
        maiorNumero: numero,
        maiorDivisivelPorMenor: modulo,
        diferenca: diferenca
    }
    return doisnumeros
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const numero = []
    let i = 0
    let repetir = [n]
    console.log(n);

    console.log(repetir[0]);
    n = repetir.shift()
    n += 1
    console.log(n);
    do {
        if (i % 2 === 0) {
            numero.push(i)

        }
        i++
    } while (i <= n);
    /* for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(i);
            numero.push(i)
        }
    } */
    return numero
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC && ladoA === ladoC) {
        return "Equilátero";
    } else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
        return "Escaleno";
    } else {
        return "Isósceles";
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const maiorMenor = []
    let maior = Math.max(...array)
    array.shift(maior)
    let menor = Math.min(...array)
    array.shift(menor)
    maior = Math.max(...array)
    menor = Math.min(...array)
    maiorMenor.push(maior)
    maiorMenor.push(menor)
    return maiorMenor

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let frase = ""
    for (let ator of filme.atores) {
        frase += ator + ", "
    }
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const novoObjeto = {
        ...pessoa,
        nome: "ANÔNIMO"

    }
    return novoObjeto
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pegarIdade = pessoas.filter((pessoa, index, array) => {
        return pessoa.idade > 14
    })
    const pegarAltura = pegarIdade.filter((pessoa, index, array) => {
        return pessoa.altura >= 1.5
    })
    const pegarIdoso = pegarAltura.filter((pessoa, index, array) => {
        return pessoa.idade < 60
    })
    return pegarIdoso
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pegarMenorIdade = pessoas.filter((pessoa, index, array) => {
        return pessoa.nome
    })
    const pegar = pegarMenorIdade.filter((pessoa, index, array) => {
        return pessoa.nome !== "D"
    })
    return pegarMenorIdade
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    const ordemAlfabetica = consultas.filter((nome, index, array) => {
        return nome.nome
    })
    return ordemAlfabetica
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}