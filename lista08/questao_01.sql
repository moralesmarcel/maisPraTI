-- questao_01: Faca uma listagem do cardapio ordenada por nome; onde sera exibido: id, nome, descricao, preco.

SOURCE base_bomgosto.sql;

--Listagem do cardápio ordenada por nome
SELECT
id AS codigo,
nome,
descricao,
preco AS preco_unitario
FROM cardapio
ORDER BY nome;