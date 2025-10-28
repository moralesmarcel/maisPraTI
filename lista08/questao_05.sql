-- questao_05: Qual o total de faturamento por data? ordene por data esta consulta. Aqui foi somado todas as comandas (itens) agrupadas por data.

SOURCE base_bomgosto.sql;

-- Faturamento total por data
SELECT
c.data,
SUM(ic.quantidade * cp.preco) AS faturamento_total_no_dia
FROM comanda c
JOIN item_comanda ic ON ic.comanda_id = c.id
JOIN cardapio cp ON cp.id = ic.cardapio_id
GROUP BY c.data
ORDER BY c.data;