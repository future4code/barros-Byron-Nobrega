# Byron Smith
## _Exercício 1_
**a) Resposta:**
- O comando ALTER TABLE serve para adicionar, excluir ou modificar colunas em uma tabela e o comando DROP COLUMN serve para remover uma coluna da tabela, sendo assim o comando acima irá remover a coluna salary da tabela Actor.

**b) Resposta:**
- Ao utilizar o comando ALTER TABLE com o modificado CHANGE estará realizando a renomeação de uma coluna e alterar suas definições, como o tipo de dados de uma coluna. No caso do comando acima está renomado a coluna gender para sex e atribuindo o tipo VARCHAR com 6 posições.

**c) Resposta** 
- Ao utilizar o comando ALTER TABLE com o modificado CHANGE estará realizando a renomeação de uma coluna e alterar suas definições, como o tipo de dados de uma coluna. No caso do comando acima está renomada a coluna gender pra gender atribuindo o tipo VARCHAR com 255 posições. 

**d) Resposta**
~~~sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
~~~

## _Exercício 2_

**a) Resposta**
~~~sql
UPDATE Actor set name = "John",birth_date ="1991-10-01" WHERE id ="003";
~~~
**b) Resposta**
~~~sql
UPDATE Actor set name = "JULIANA PAES" WHERE name ="Juliana Paes";
UPDATE Actor set name = "Juliana Paes" WHERE name ="JULIANA PAES";
~~~
**c) Resposta**
~~~sql
UPDATE Actor set name = "Johnny",salary = 300000,birth_date ="1991-10-01", gender = “male” WHERE id ="005";
~~~
**d) Resposta**
~~~sql
UPDATE Actor set name = "Johnny",salary = 300000,birth_date ="1991-10-01", gender = “male” WHERE id ="100";
~~~
- 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
- O comando é executado normalmente  mas não faz nem uma alteração porque a condição não existe.

## _Exercício 3_
**a) Resposta**
~~~sql
DELETE FROM Actor WHERE name = " Fernanda Montenegro";
~~~
**b) Resposta**
~~~sql
DELETE FROM Actor WHERE gender= "male" and salary = 1000000;
~~~
## _Exercício 4_
**a) Resposta**
~~~sql
SELECT MAX(salary) FROM Actor;
~~~
**b) Resposta**
~~~sql
SELECT MIN(salary) FROM Actor WHERE gender = "female";
~~~
**c) Resposta**
~~~sql
SELECT CONTE(*) FROM Actor WHERE gender = "female" ;
~~~
**d) Resposta**
~~~sql
SELECT SUM(salary) FROM Actor;
~~~
## _Exercício 5_
**a) Resposta**
~~~sql
SELECT * FROM Actor WHERE gender = 'female'ORDER BY name ASC LIMIT 4);
~~~
- O comando acima vai contar quantos atores tem em cada genero.


**b) Resposta**
~~~sql
SELECT id, name FROM Actor ORDER BY name DESC;
~~~
**c) Resposta**
~~~sql
SELECT * FROM Actor ORDER BY salary DESC;
~~~
**d) Resposta**
~~~sql
SELECT * FROM Actor ORDER BY salary LIMIT 3;
~~~
**e) Resposta**
~~~sql
SELECT AVG(salary) FROM Actor GROUP BY gender;
~~~
## _Exercício 6_
**a) Resposta**
~~~sql
ALTER TABLE Movies ADD Playing_limit_date VARCHAR(255) NOT NULL;
 ~~~
**b) Resposta**
~~~sql
ALTER TABLE Movies CHANGE evaluation rating FLOAT NOT NULL; 
~~~
**c) Resposta**
~~~sql
UPDATE Movies SET Playing_limit_date = "2023-11-01" WHERE id=5;
UPDATE Movies SET Playing_limit_date = "2022-11-01" WHERE id=4;
~~~
**d) Resposta**
~~~sql
DELETE FROM Movies WHERE id = 3; 
~~~
- 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
- O comando é executado normalmente  mas não faz nem uma alteração porque a condição não existe.

## FIM

