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
    for (let i = 0; numero.length < n; i++) {
        if (i % 2 === 0) {
            numero.push(i)
        }
    }
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
    let maior
    let menor

    if (array.length > 2) {
        maior = Math.max(...array)
        array.splice(array.indexOf(maior), 1)
        menor = Math.min(...array)
        array.splice(array.indexOf(menor), 1)
        maior = Math.max(...array)
        menor = Math.min(...array)
        maiorMenor.push(maior)
        maiorMenor.push(menor)
    } else if (array.length = 2) {
        maior = Math.max(...array)
        menor = Math.min(...array)
        maiorMenor.push(menor)
        maiorMenor.push(maior)
    }
    return maiorMenor

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
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
    return pessoas.filter(autorizadas => {
            return (autorizadas.idade > 14 && autorizadas.altura >= 1.5 &&
                autorizadas.idade < 60)
        })
        /* const pegarIdade = pessoas.filter((pessoa, index, array) => {
            return pessoa.idade > 14
        })
        const pegarAltura = pegarIdade.filter((pessoa, index, array) => {
            return pessoa.altura >= 1.5
        })
        const pegarIdoso = pegarAltura.filter((pessoa, index, array) => {
            return pessoa.idade < 60
        }) 
        return pegarIdoso*/
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter(autorizadas => {
            return (autorizadas.idade <= 14 || autorizadas.altura < 1.5 ||
                autorizadas.idade > 60)
        })
        /* const pegarMenorIdade = pessoas.filter((pessoa, index, array) => {
            return pessoa.idade <= 14
        })
        const pegar = pessoas.filter((pessoa, index, array) => {
            return pessoa.altura < 1.5
        })
        const listaNaoAutorizada = [...pegarMenorIdade, ...pegar]
        listaNaoAutorizada.sort((a, b) => {
            if (a.nome < b.nome) {
                return -1;
            } else {
                return true
            }
        })

        return listaNaoAutorizada */
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (let i = 0; i < contas.length; i++) {
        let totalCompras = [];
        calculaSaldo(contas)

        function calculaSaldo(utilizador) {
            utilizador[i].compras.forEach(valorCompras => totalCompras.push(valorCompras * -1));
        }

        function somaNumeros(numeros) {
            return numeros.reduce((somar, valorCompras) => somar + valorCompras, 0);
        }
        contas[i].compras = []
        contas[i].saldoTotal += somaNumeros(totalCompras)

    }

    return contas

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    const ordenAlfabetica = consultas.sort((a, b) => {
        return a.nome.localeCompare(b.nome)
    });
    return ordenAlfabetica

    /* consultas.sort((a, b) => {
        if (a.nome < b.nome) {
            return -1;
        } else {
            return 1
        }
    })
    return consultas */
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    for (let i = 0; i < consultas.length; i++) {
        consultas.sort((a, b) => {
            if (a.dataDaConsulta.split('/')[i] > b.dataDaConsulta.split('/')[i]) {
                return 1;
            } else if (a.dataDaConsulta.split('/')[i] < b.dataDaConsulta.split('/')[i]) {
                return -1
            }

        })
    }

    return consultas
}