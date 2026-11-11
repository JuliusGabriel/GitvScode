/* 1 - ver os campos que começe com "D"*/
USE vendas_informatica;
SELECT * FROM produto WHERE nome_produto LIKE 'D%';

/* 2 - consultar nome, marca, preço que a marca tenha "E"*/
USE vendas_informatica;
SELECT nome_produto, marca, preco_unitario FROM produto WHERE marca LIKE 'E%';

/* 3 - consultar nome, marca, preço com um nome que tenha "Gamer" */
USE vendas_informatica;
SELECT nome_produto, marca, preco_unitario FROM produto WHERE nome_produto LIKE '%Gamer%';

/* 4 - consultar todos do nome quais tiverem sobrenome "barbosa" */
USE vendas_informatica;
SELECT * FROM cliente WHERE nome_cliente LIKE '%Barbosa%';

/* 5 - consulte nome, data, preço e forma de pagamente onde o nome começa com "C" */
USE vendas_informatica;
SELECT cliente.nome_cliente, venda.data_venda, produto.preco_unitario, venda.forma_pagamento
FROM cliente
INNER JOIN venda ON cliente.id_cliente = venda.id_cliente
INNER JOIN produto ON venda.id_produto = produto.id_produto
WHERE cliente.nome_cliente LIKE 'C%';

/* 6 - consulte nome, preço, venda e forma de pagamento onde seja Pix e Boleto com o nome 
Polegada */
USE vendas_informatica;
SELECT produto.nome_produto, produto.preco_unitario, venda.id_venda, venda.forma_pagamento
FROM produto
INNER JOIN venda ON produto.id_produto = venda.id_produto
WHERE venda.forma_pagamento IN ('Pix', 'Boleto')
AND produto.nome_produto LIKE '%Polegada%';

/* 7 - nome produto, nome venda, desconto e forma de pagamento onde nome produto tenha
Placa, Notebook ou que o nome do cliente seja Ana com status seja em forma de Afalbeto(crescente)*/ 
USE vendas_informatica;
SELECT produto.nome_produto, cliente.nome_cliente, venda.desconto_percentual, venda.forma_pagamento
FROM produto
INNER JOIN venda ON produto.id_produto = venda.id_produto
INNER JOIN cliente ON venda.id_venda = cliente.id_cliente
WHERE produto.nome_produto LIKE 'Placa%' 
OR produto.nome_produto LIKE 'Notebook%' 
OR cliente.nome_cliente LIKE '%Ana%'
ORDER BY venda.status_venda ASC;

/* Atividade 2 */

USE vendas_informatica;
SELECT *
FROM produto
WHERE data_cadastro 
BETWEEN '2024-03-01' AND '2024-03-31';

USE vendas_informatica;
SELECT nome_produto, marca, estoque, data_cadastro
FROM produto
WHERE data_cadastro
BETWEEN '2024-01-01' AND '2024-03-01';

USE vendas_informatica;
SELECT *
FROM produto
WHERE data_cadastro
BETWEEN '2023-01-01' AND '2023-01-31';

USE vendas_informatica;
SELECT nome_cliente, email, cidade, estado, data_cadastro
FROM cliente
WHERE data_cadastro
BETWEEN '2023-05-01' AND '2023-05-15';

USE vendas_informatica;
SELECT *
FROM venda
WHERE data_venda
BETWEEN '2025-03-01' AND '2025-03-31'

USE vendas_informatica;
SELECT nome_cliente, venda.data_venda, venda.preco_unitario_venda, venda.forma_pagamento
FROM cliente
JOIN venda ON cliente.id_cliente = venda.id_cliente
WHERE venda.data_venda
BETWEEN '2024-12-24' AND '2024-01-15'
ORDER BY venda.preco_unitario_venda DESC 

USE vendas_informatica;
SELECT nome_cliente, email, produto.nome_produto, produto.marca, produto.categoria, 
venda.forma_pagamento, venda.data_venda, venda.status_venda
FROM cliente
INNER JOIN venda ON cliente.id_cliente = venda.id_cliente
INNER JOIN produto ON venda.id_produto = produto.id_produto
WHERE venda.status_venda IN ('Cancelado', 'Concluída') 
AND venda.data_venda BETWEEN '2025-10-01' AND '2025-10-31'
ORDER BY venda.preco_unitario_venda DESC;