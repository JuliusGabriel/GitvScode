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
JOIN venda ON cliente.id_cliente = venda.id_cliente
JOIN produto ON venda.id_produto = produto.id_produto
WHERE cliente.nome_cliente LIKE 'C%';

/* 6 - consulte nome, preço, venda e forma de pagamento onde seja Pix e Boleto com o nome 
Polegada */
USE vendas_informatica;
SELECT produto.nome_produto, produto.preco_unitario, venda.id_venda, venda.forma_pagamento
FROM produto
JOIN venda ON produto.id_produto = venda.id_produto
WHERE venda.forma_pagamento IN ('Pix', 'Boleto')
AND produto.nome_produto LIKE '%Polegada%';

/* 7 - nome produto, nome venda, desconto e forma de pagamento onde nome produto tenha
Placa, Notebook ou que o nome do cliente seja Ana com status seja em forma de Afalbeto(crescente)*/ 
USE vendas_informatica;
SELECT produto.nome_produto, cliente.nome_cliente, venda.desconto_percentual, venda.forma_pagamento
FROM produto
JOIN venda ON produto.id_produto = venda.id_produto
JOIN cliente ON venda.id_venda = cliente.id_cliente
WHERE produto.nome_produto LIKE 'Placa%' 
OR produto.nome_produto LIKE 'Notebook%' 
OR cliente.nome_cliente LIKE '%Ana%'
ORDER BY venda.status_venda ASC;