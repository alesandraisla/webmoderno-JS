select * from cidades;


insert into prefeitos
    (nome, cidade_id)
values
    ('Rodrigo Neves', 3),
    ('Raquel Lyra', 5),
    ('Zenaldo Coutinho', null);


insert into prefeitos (nome, cidade_id)
values ('Rafael Greca', null);


select * from prefeitos;    

delete from prefeitos
where id = 8;