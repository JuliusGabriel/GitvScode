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