select * from estados e, cidades c
where e.id = c.estado_id;

-- Quando houver ambiguidade de nomes em tabelas diferentes, funciona bem no workbench
select 
    e.nome as Estado, 
    c.nome as Cidade, 
    e.regiao as Região 
from estados e, cidades c
where e.id = c.estado_id;

-- Usando Inner Join 
select 
    c.nome as Cidades, 
    e.nome as Estado,
    regiao as Região
from estados e
inner join cidades c on e.id = c.estado_id;