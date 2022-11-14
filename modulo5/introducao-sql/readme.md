# Byron Smith
## _Exercício 1_
**a) Resposta:**
- Foi utilizado o varchar para o id mas o ideal seria usar number, assim poderíamos utilizar o auto_increment o id é a chave primária que indica que ele tem que ser único.
- O name é um varchar que uma das formas de representar uma string.
- birth_date é um date o'qual serve para representar uma data.
- E foi utilizado varchar para gender

**b) Resposta:**

- O comando SHOW DATABASES retorna os bancos existentes, já o SHOW TABLES retorna as tabelas de um determinado banco de dados.

**c) Resposta** 
- O comando descreve as propriedades de um tabela.

## _Exercício 2_

**a) Resposta**
~~~sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("002","Glória Pires",1200000,"1963-08-23","female");
~~~
**b) Resposta**
- Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
- isso acontece porque já existe uma chave 002 na tabela.

**c) Resposta**
- Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1
- isso acontece porque faltou uma coluna ser passado no insert.

**d) Resposta**
- Código de erro: 1364. O campo 'nome' não tem um valor padrão.
- isso acontece porque não foi passado um valor para a coluna nome e como ela não pode ser null retorna um erro.

**e) Resposta**
- Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1.
- isso acontece porque na coluna birth_date ela é um data e tem um padrão a ser seguido.

**f) Resposta**
~~~sql
INSERT INTO Actor (id, name, salary,birth_date, gender) VALUES( "003", "Fernanda Montenegro", 300000, "1929-10-19","female"), ("004","Byron Smith", 400000, "1949-04-18","male"), ( "005", "Juliana Paes", 719333.33, "1979-03-26", "female");
~~~

## _Exercício 3_
**a) Resposta**
~~~sql
select * from Actor;
~~~
**b) Resposta**
~~~sql
select salary from Actor where name = 'Tony Ramos';
~~~
**c) Resposta**
~~~sql
select * from Actor where gender = 'invalid';
~~~
- não retorna nada porque na tabela não tem num um gender com o valor invalid

**d) Resposta**
~~~sql
select id, name, salary from Actor where salary >500000;
~~~
**e) Resposta**
- Error Code: 1054. Unknown column 'nome' in 'field list'
- isso acontece porque não existe na tabela coluna nome e sim name.
~~~sql
SELECT id, name from Actor WHERE id = "002";
~~~

## _Exercício 4_
~~~sql
SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
~~~
**a) Resposta**
- Ele vai selecionar todas as colunas da tabela Actor que tenham a primeira letra do nome A ou J e salário maior do que 300.000.

**b) Resposta**
~~~sql
select * from Actor where name like ‘A%’ and salary = 350000;
~~~
**c) Resposta**
~~~sql
select * from Actor where name like '%G%' or  name like '%g%';
~~~
**d) Resposta**
~~~sql
select * from Actor where (name like '%a%' or name like '%A%' or name like '%g%' or name like '%G%') and salary between 350000 and 900000;
~~~
## _Exercício 5_
**a) Resposta**
~~~sql
CREATE TABLE Muves (
    id INT PRIMARY KEY auto_increment,
    name VARCHAR (50) NOT NULL unique,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    evaluation INT NOT NULL
);
~~~
**b,c,d,e) Resposta**
~~~sql
insert into Muves(name,synopsis,release_date,evaluation) 
values('Se Eu Fosse Você','Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos','2006-01-06',7), ('Doce de mãe','Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela','2012-12-27', 10), ('Dona Flor e Seus Dois Maridos','Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.','2017-11-02',8), ('O Auto da Compadecida', 'As aventuras dos nordestinos João Grilo (Matheus Natchergaele), um sertanejo pobre e mentiroso, e Chicó (Selton Mello), o mais covarde dos homens. Ambos lutam pelo pão de cada dia e atravessam por vários episódios enganando a todos do pequeno vilarejo de Taperoá, no sertão da Paraíba.','2000-09-10','10');
~~~
## _Exercício 6_
**a) Resposta**
~~~sql
select id, name as titulo, evaluation from Muves where id = 2;
 ~~~
**b) Resposta**
~~~sql
select * from Muves where name = 'O Auto da Compadecida'; 
~~~
**c) Resposta**
~~~sql
select id, name as titulo, synopsis from Muves where evaluation >= 7;
~~~
## _Exercício 7_
**a) Resposta**
~~~sql
select * from Muves where name like '%vida%'';
~~~
**b) Resposta**
~~~sql
select * from Muves where (name like '%vida%'' or synopsis like '%vida%');
~~~
**c) Resposta**
~~~sql
select * from Muves where release_date < '2022-11-08';
~~~
**d) Resposta**
~~~sql
select * from Muves where release_date < ‘2022-11-08’ and (name like ‘%vida%’ or synopsis like ‘%vida%’ ) and evaluation > 7 */
~~~

## FIM

