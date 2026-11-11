CREATE DATABASE db_senai;

USE db_senai;

CREATE TABLE cliente(
    id_client INT PRIMARY KEY AUTO_INCREMENT,
    nome_cliente VARCHAR(100) NOT NULL,
    enail_cliente VARCHAR(100) NOT NULL, 
    dt_nasc DATE NOT NULL
);

CREATE TABLE produto(
    id_protudo INIT PRIMARY KEY AUTO_INCRIMENT,
    produto VARCHAR(100) NOT NULL,
    dt_entrega DATE NOT NULL,
    preco DECIMAL (10, 2),
    qtd INT NOT NULL
);

CREATE TABLE vendas(
    id_venda INIT PRIMARY KEY AUTO_INCRIMENT,
    id_client INIT NOT NULL,
    id_protudo INIT NOT NULL,
    dt_entrada DATE NOT NULL
);

/* entidade da tabela cliente */

USE db_senai;

INSERT INTO cliente(nome_cliente, email, dt_nasc)
VALUES("Michael Jackson", "m.jackson@gmail.com", "1920-03-22");

INSERT INTO cliente(nome_cliente, email, dt_nasc);
VALUES("julião", "mh.tinho@gmail.com", "1967-03-22");

INSERT INTO cliente(nome_cliente, email, dt_nasc)
VALUES("Joardson", "Joardsousa@gmail.com", "2009-06-05");

SELECT * FROM cliente

/* itens da entidade produto*/

USE db_senai

INSERT INTO produto(produto, dt_entrada, preco, qtd)
VALUES("Notebook Dell", "2026-10-05", 500.45, 5);

INSERT INTO produto(produto, dt_entrada, preco, qtd)
VALUES("Sabão em pedra", "2026-10-23", 5.99, 100);

INSERT INTO produto(produto, dt_entrada, preco, qtd)
VALUES("Bicicleta Gamer", "2026-04-01", 6.80, 500);

SELECT * FROM produto;

/* itens da tabela produto */
USE db_senai

INSERT INTO vendas(id_client, id_protudo, dt_entrada)
VALUES(1,1, "2026-10-05");

INSERT INTO vendas(id_client, id_protudo, dt_entrada)
VALUES(3,2, "2026-10-23");

INSERT INTO vendas(id_client, id_protudo, dt_entrada)
VALUES(2,3, "2026-04-01");

SELECT * FROM vendas;

/*chave estrangeira*/
ALTER TABLE vendas
ADD CONSTRAINT fk_vendas_cliente
FOREIGN KEY (id_cliente)
REFERENCES cliente (id_cliente);

ALTER TABLE vendas
ADD CONSTRAINT fk_vendas_produto
FOREIGN KEY (id_protudo) 
REFERENCES produto(id_protudo);

/*Definir como produto unico*/
ALTER TABLE produto
ADD CONSTRAINT uk_produto_unico UNIQUE (produto);