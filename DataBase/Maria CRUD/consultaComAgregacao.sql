SELECT
  regiao as 'Região',
  sum(populacao) as Total
  FROM estados
  GROUP BY regiao
  ORDER BY regiao;

select 
  avg(populacao) as Total
from estados;
