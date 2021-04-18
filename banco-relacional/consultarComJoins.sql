
-- Selecionará apenas o inner
select * from cidades c inner join prefeitos p on c.id = p.cidade_id;

-- Mostrará tudo da tabela esquerda (cidades) mais o inner (junção de ambas)
select * from cidades c left join prefeitos p on c.id = p.cidade_id;
select * from cidades c left outer join prefeitos p on c.id = p.cidade_id;

-- Mostrará tudo da tabela direita (prefeitos) mais o inner (junção de ambas)
select * from cidades c right join prefeitos p on c.id = p.cidade_id;
select * from cidades c right outer join prefeitos p on c.id = p.cidade_id;

-- Mostrará tudo 
select * from cidades c left outer join prefeitos p on c.id = p.cidade_id
union
select * from cidades c right outer join prefeitos p on c.id = p.cidade_id;

-- Mostrará tudo inclusive duplicação de todas
select * from cidades c left outer join prefeitos p on c.id = p.cidade_id
union all
select * from cidades c right outer join prefeitos p on c.id = p.cidade_id;