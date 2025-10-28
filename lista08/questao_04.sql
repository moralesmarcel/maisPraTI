-- questao_04: Faça a mesma listagem das comandas da questão anterior (3), mas traga apenas as comandas que possuem mais do que um tipo de café na comanda; onde, "Mais do que um tipo de café" significa: COUNT(DISTINCT cardapio_id) > 1

SOURCE base_bomgosto.sql;

-- Comandas com mais de um tipo de café
SELECT
c.id AS codigo_comanda,
c.data,
c.mesa,
c.nome_cliente,
SUM(ic.quantidade * cp.preco) AS valor_total_comanda,
COUNT(DISTINCT ic.cardapio_id) AS tipos_de_cafe
FROM comanda c
JOIN item_comanda ic ON ic.comanda_id = c.id
JOIN cardapio cp ON cp.id = ic.cardapio_id
GROUP BY c.id, c.data, c.mesa, c.nome_cliente
HAVING COUNT(DISTINCT ic.cardapio_id) > 1
ORDER BY c.data;