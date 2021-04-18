select * from estados;

INSERT INTO cidades (nome, area, estado_id)
values ('Campinas', 795, 1030);

INSERT INTO cidades (nome, area, estado_id)
values ('Niterói', 133.9, 1024);

INSERT INTO cidades (nome, area, estado_id)
values (
    'Caruaru',
    920.6, 
    (select id from estados where sigla = 'PE')
);

INSERT INTO cidades (nome, area, estado_id)
values (
    'Juazeiro do Norte', 
    248.2, 
    (select id from estados where sigla = 'CE')
);

select * from cidades;