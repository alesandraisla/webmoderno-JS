ALTER TABLE empresas MODIFY cnpj VARCHAR(14);       


INSERT INTO empresas (nome, cnpj)
VALUES  ('Bradesco', 95694186000132),
        ('Vale', 64239684000161),
        ('Cielo', 03057702000108);



select * from empresas;
select * from cidades;

desc empresas;


INSERT INTO empresas_unidades (empresa_id, cidade_id, sede)
VALUES  (4, 1, 1),
        (5, 5, 0),
        (4, 3, 0),
        (5, 6, 1);