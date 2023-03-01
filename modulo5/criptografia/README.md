## <h1 align="center">📇 introducao autenticacao</h1>

## :memo: Descrição
Projeto desenvolvido como didática de back-end para as turmas JBL LABENU com conteúdos que englobam o universo da criação de uma API com a temática introducao-autenticacao com UUID e JWT.

## :books: Respostas Exercício:
* <b>Exercício 1</b> 
* a) O cost ou round é método de segurança que o bccrypt possui e é relacionado a senha o salt é uma string aleatória. Os valores relacionados a ele são de 1 a 99 onde quanto maior o cost / número maior o tempo de processamento. O valor que usei foi o 12 por convenção das bibliotecas, mas o ideal é ver o quanto de segurança a aplicação precisa e quanto de processamento tem disponível para a aplicação a fim de chegar a um meio termo.
* <b>Exercício 2</b>
*  a) Para realizar os testes devemos alterar o cadastro primeiro, pois precisamos armazenar no banco o hash criado para a senha do usuário a fim de comparar esta senha na login.

## :wrench: Tecnologias utilizadas
* VS Code
* nodeJS
* expressJS
* axios
* cors
* dotenv
* MySQL
* uuid
* JWT


## :rocket: Rodando o projeto
Para rodar o repositório é necessário clonar o mesmo, dar o seguinte comando para instalar as dependências:
```
npm install
```
Após instaladas as dependências, configure o arquivo .env:
```
DB_HOST = 
DB_USER = ""
DB_PASS = ""
DB_NAME = ""
```
Após o migration, dê o comando seguinte para rodar a aplicação:
```
npm run start
```

Use o Postman para realizar as requisições desejadas.

## :dart: Status do projeto
O projeto está em andamento.