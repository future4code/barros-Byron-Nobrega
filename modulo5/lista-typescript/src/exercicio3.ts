type filmes ={
    nome:string,
    lancamento:number,
    genero:Genero,
   
}

enum Genero{
    acao="ação",
    drama="drama",
    comedia="comédia",
    romance="romance",
    terror="terror"
}

function filme(nome:string,lancamento:number,genero:Genero,pontuacao?:number):filmes {
   const listFilme= pontuacao!=undefined?{nome,lancamento,genero,pontuacao}:{nome,lancamento,genero}
   return listFilme
}

console.log(filme("Duna", 2021, Genero.acao));

