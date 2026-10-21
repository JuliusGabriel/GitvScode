/* Att-1
*/

USE vendas_informatica;
SELECT * FROM produto;

/* Att-2
*/

USE vendas_informatica;
SELECT nome_produto, marca, estoque FROM produto;

/* Att-3
*/

USE vendas_informaticas;
SELECT nome_produto, categoria, preco_unitario, data_cadastro FROM produto ORDER BY marca ASC;

/* Att-4
*/

USE vendas_informatica;
SELECT nome_produto, marca, estoque FROM produto ORDER BY data_cadastro DESC;

/*Att-5
*/

USE vendas_informatica;
SELECT * FROM cliente;

/* Att-6
*/

USE vendas_informatica;
SELECT nome_cliente, email, cidade, estado FROM cliente;

/* Att-7
*/

USE vendas_informatica;
SELECT nome_cliente, cidade, estado FROM cliente ORDER BY estado ASC;

/* Att-8
*/

USE vendas_informatica;
SELECT nome_cliente, email, estado, data_cadastro FROM cliente ORDER BY data_cadastro DESC;

/* Att-9
*/

USE vendas_informatica;
SELECT * FROM venda;

/* Att-10
*/

USE vendas_informatica;
SELECT cliente.nome_cliente, venda.data_venda, venda.preco_unitario_venda, venda.forma_pagamento  
FROM venda INNER JOIN cliente ON venda.id_cliente = cliente.id_cliente;

/* Att-11
*/

USE vendas_informatica;
SELECT produto.nome_produto, data_venda, quantidade, status_venda  
FROM venda INNER JOIN produto ON venda.id_produto = produto.id_produto;

/* Att-12
*/

USE vendas_informatica;
SELECT produto.nome_produto, venda.preco_unitario_venda, venda.forma_pagamento  
FROM venda
INNER JOIN produto ON venda.id_produto = produto.id_produto
WHERE forma_pagamento IN ("PIX","BOLETO");

/* Att-13
*/

SELECT cliente.nome_cliente, produto.nome_produto, quantidade, data_venda 
FROM venda
INNER JOIN cliente ON venda.id_cliente = produto.id_cliente
INNER JOIN produto ON venda.id_produto = produto.id_produto;

/* Att-14
*/

USE vendas_informatica;
SELECT produto.nome_produto, desconto_percentual, forma_pagamento 
FROM venda
INNER JOIN cliente ON venda.id_cliente = cliente.id_cliente
INNER JOIN produto ON venda.id_produto = produto.id_produto
ORDER BY data_venda ASC;

/* Att-15
*/

USE vendas_informatica;
SELECT  cliente.nome_cliente, produto.nome_produto, desconto_percentual, forma_pagamento
FROM venda
INNER JOIN cliente ON venda.id_cliente = cliente.id_cliente
INNER JOIN produto ON venda.id_produto = produto.id_produto
ORDER BY status_venda ASC;

/* Att-16
*/

SELECT cliente.nome_cliente, cliente.email, produto.nome_produto, produto.marca, produto.categoria, forma_pagamento 
FROM venda INNER JOIN cliente ON venda.id_cliente = cliente.id_cliente 
INNER JOIN produto ON venda.id_produto = produto.id_produto 
WHERE status_venda IN ("Concluída","Cancelada") 
ORDER BY status_venda ASC;

/* Segunda trabalho -2
*/

/*1
*/

USE vendas_informatica;
UPDATE cliente SET cidade = 'Senailandia'
WHERE estado IN ("DF", "ES");

/*2
*/
USE vendas_informatica;
UPDATE cliente SET data_cadastro = '2026-01-01' 
WHERE cidade IN ("Manaus");

/*3
*/
USE vendas_informatica;
UPDATE cliente SET nome_cliente = 'Michael Jackson'
WHERE id_cliente = 10;

/*4
*/
USE vendas_informatica;
UPDATE produto SET nome_produto = 'Nootbook Lenovo IdeaPad7'
WHERE id_produto = 1;

/*5
*/
USE vendas_informatica;
UPDATE produto SET preco_unitario = 4999.99
WHERE marca IN ("DELL");

/*6
*/
UPDATE venda SET desconto_percentual = 0.01
 WHERE quantidade = 2;