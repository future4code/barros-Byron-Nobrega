/* a) Copie o código acima para um arquivo .ts depois:

- crie um *type* para representar um post;
- Utilize esse mesmo tipo criado acima para fazer a tipagem do array posts. */

type TypePosts={
    autor:string
    texto:string
}

const posts:TypePosts[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]


  /* b) Observe abaixo a função buscarPostsPorAutor(), escrita em JavasScript:
  Quais são as entradas e saídas dessa função? Copie a função para o mesmo arquivo .ts do array de posts e faça a tipagem necessária.  */
  // entra um array de objetos e o id do autor e a saída é um array com os posts do autor de entrada

  function buscarPostsPorAutor(posts:TypePosts[], autorInformado:string):TypePosts[] {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }