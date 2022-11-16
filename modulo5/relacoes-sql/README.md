# Byron Smith
## _Exercício 1_
**a) Resposta:**
- A chave estrangeira nada mais é que a chave primária de uma outra tabela.

**b) Resposta:**
~~~sql
INSERT INTO Rating (comment,rate,movie_id) VALUES ("Filme ótimo", 10,5);
~~~

**c) Resposta** 
- retorna um erro pois a chave estrangeira não existe. 
- (“Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jbl-4416138-byron-nobrega`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))”). 

**d) Resposta**
~~~sql
ALTER TABLE Movies DROP COLUMN rating;
~~~
**e) Resposta**
~~~sql
DELETE FROM Movies WHERE id = 5;
~~~
- Retorna um erro pois o id da tabela Movies é chave estrangeira de uma outra tabela, este erro acontece porque a chave estrangeira garante a integridade dos dados.
- (“Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`jbl-4416138-byron-nobrega`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))”).


## _Exercício 2_

**a) Resposta**
- Esta tabela vai servir para ligar/vincular os atores aos filmes usando as chaves estrangeiras.

**b) Resposta**
~~~sql
INSERT INTO NOME_DA_TABELA (movie_id, actor_id) VALUES( "4", "1" ),("3", "4"),("5", "2"),("6", "3"),("2", "6"),("1", "5");
~~~
**c) Resposta**
- retorna um erro pois a chave estrangeira não existe.
- (”Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jbl-4416138-byron-nobrega`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))”).

**d) Resposta**
- Retorna um erro pois o id da tabela Actor é chave estrangeira de uma outra tabela, este erro acontece porque a chave estrangeira garante a integridade dos dados.
- (”Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`jbl-4416138-byron-nobrega`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))”).


## _Exercício 3_
**a) Resposta**
- A query acima faz uma consulta a tabela Movies e faz um junção com a tabela Rating. o ON significa a condição para a junção.

**b) Resposta**
~~~sql
SELECT m.name, m.id, r.rate FROM Movies m, Rating r WHERE m.id = r.movie_id;
~~~
## _Exercício 4_
**a) Resposta**
~~~sql
SELECT m.id, m.title, r.rate, r.comment FROM Movie m LEFT JOIN Rating r ON m.id = r.movie_id;
~~~
**b) Resposta**
~~~sql
SELECT m.id, m.title, mc.actor_id FROM Movie m RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;
~~~
**c) Resposta**
~~~sql
SELECT AVG(r.rate), m.id, m.title FROM Movie m LEFT JOIN Rating r ON m.id = r.movie_id GROUP BY (m.id);
~~~

## _Exercício 5_
**a) Resposta**
- A query faz a consulta de com uma  junção das tabela Movies,  MovieCast e Actor, retornando todas as colunas.

**b) Resposta**
~~~sql
SELECT m.id as id_movies, m.name, a.id as id_actor, a.name as actor FROM Movies m LEFT JOIN MovieCast mc ON m.id = mc.movie_id JOIN Actor a ON a.id = mc.actor_id;
~~~
**c) Resposta**
- A query tem um erro na parte m,title onde a vírgula está colocada no lugar de um ponto.

**d) Resposta**
~~~sql
SELECT m.id as id_movies, m.name, a.id as id_actor, a.name, r.rate, r.comment FROM Movies m LEFT JOIN Rating r on r.movie_id = m.id LEFT JOIN MovieCast mc ON m.id = mc.movie_id JOIN Actor a ON a.id = mc.actor_id;
~~~
## _Exercício 6_
**a) Resposta**
- a relação é N:N

**b) Resposta**
~~~sql
CREATE TABLE Prize (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, date_won date, movie_id INT, FOREIGN KEY (movie_id) REFERENCES Movies(id));
~~~
- Foi criado um id auto incremental, um nome, uma data e uma coluna movie_id que é um atributo chave estrangeira.

**c) Resposta**
~~~sql
INSERT INTO Prize (name,date_won,movie_id) VALUES ("Oscar de melhor filme","2020-09-20",5);
~~~
**d) Resposta**
~~~sql
SELECT * FROM Movies m JOIN Prize p ON m.id = p.movie_id;
~~~

## FIM

