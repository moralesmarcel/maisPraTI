-- questao_03: Liste todas as comandas (código, data, mesa e nome do cliente) mais uma coluna com o valor total da comanda; Ordene por data esta listagem;

SOURCE base_bomgosto.sql;

-- Comandas com valor total
SELECT
c.id AS codigo_comanda,
c.data,
c.mesa,
c.nome_cliente,
SUM(ic.quantidade * cp.preco) AS valor_total_comanda
FROM comanda c
LEFT JOIN item_comanda ic ON ic.comanda_id = c.id
LEFT JOIN cardapio cp ON cp.id = ic.cardapio_id
GROUP BY c.id, c.data, c.mesa, c.nome_cliente
ORDER BY c.data;