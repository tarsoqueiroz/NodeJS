select * from estados;

select nome, sigla from estados;

select nome AS 'Nome', sigla AS 'Sigla' from estados;

select nome, sigla from estados
   where regiao = 'Sul';

select nome, sigla from estados
   where regiao = 'Sul'
   order by populacao;

select nome, sigla from estados
   where regiao = 'Sul'
   order by populacao desc;


