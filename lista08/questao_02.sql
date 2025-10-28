-- questao_02: Apresente todas as comandas (codigo, data, mesa e nome do cliente) e os itens da comanda (codigo comanda, nome do cafe, descricao, quantidade, preco unitario e preco total do cafe), destas ordenados data e codigo da comanda e, tambem o nome do café.

SOURCE base_bomgosto.sql;

-- Comandas e itens com preço total
SELECT
c.id AS codigo_comanda,
c.data,
c.mesa,
c.nome_cliente,
ic.cardapio_id AS codigo_cardapio,
cp.nome AS nome_cafe,
cp.descricao,
ic.quantidade,
cp.preco AS preco_unitario,
(ic.quantidade * cp.preco) AS preco_total_item
FROM comanda c
JOIN item_comanda ic ON ic.comanda_id = c.id
JOIN cardapio cp ON cp.id = ic.cardapio_id
ORDER BY c.data, c.id, cp.nome;