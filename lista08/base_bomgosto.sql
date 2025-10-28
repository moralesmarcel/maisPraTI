-- Arquivo base: cria as tabelas e insere dados de exemplo

-- Este script pode ser executado diretamente no cliente mysql, por exemplo: mysql -u root -p bomgosto_db < base_bomgosto.sql


-- 1) Criar esquema (tabelas); foi utilizado AUTO_INCREMENT (inteiros automáticos) para as chaves primárias.

-- Remove as tabelas existentes (para evitar conflitos)
DROP TABLE IF EXISTS item_comanda;
DROP TABLE IF EXISTS comanda;
DROP TABLE IF EXISTS cardapio;


-- Criação da tabela de cardápio
CREATE TABLE cardapio (
  id INT AUTO_INCREMENT PRIMARY KEY,                -- identificador do tipo de café
  nome VARCHAR(100) NOT NULL UNIQUE,                -- nome do café (único no cardápio)
  descricao TEXT,                                   -- descrição da composição
  preco DECIMAL(10,2) NOT NULL CHECK (preco >= 0)   -- preço unitário
);


-- Criação da tabela de comandas
CREATE TABLE comanda (
  id INT AUTO_INCREMENT PRIMARY KEY,                -- código único da comanda
  data DATE NOT NULL,                               -- data da comanda
  mesa INT,                                         -- número da mesa (NULL se for delivery)
  nome_cliente VARCHAR(100)                         -- nome do cliente
);


-- Criação da tabela de itens das comandas; a chave primária composta (comanda_id, cardapio_id) impede repetição de cafés na mesma comanda
CREATE TABLE item_comanda (
  comanda_id INT NOT NULL,
  cardapio_id INT NOT NULL,
  quantidade INT NOT NULL CHECK (quantidade > 0),
  PRIMARY KEY (comanda_id, cardapio_id),
  FOREIGN KEY (comanda_id) REFERENCES comanda(id) ON DELETE CASCADE,
  FOREIGN KEY (cardapio_id) REFERENCES cardapio(id) ON DELETE RESTRICT
);


-- 2) Inserir dados de exemplo; estes dados servem para testar as consultas.

-- Limpa os dados anteriores (reseta IDs)
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE item_comanda;
TRUNCATE TABLE comanda;
TRUNCATE TABLE cardapio;
SET FOREIGN_KEY_CHECKS = 1;


-- Inserindo cafés, chás e sucos no cardápio
INSERT INTO cardapio (nome, descricao, preco) VALUES
('Expresso', 'Café expresso, 50ml', 4.50),
('Cappuccino', 'Expresso com leite vaporizado e espuma, 100ml', 8.00),
('Latte', 'Expresso com leite e camada fina de espuma, 100ml', 7.50),
('Mocha', 'Expresso, leite e calda de chocolate, 120ml', 9.00),
('Americano', 'Expresso diluído em água quente, 80ml', 5.00),
('Chocolate Quente', 'Chocolate quente com chantilly, 120ml', 10.00),
('Café Gelado', 'Café coado servido com gelo, 120ml', 8.00),
('Chá Verde', 'Chá Verde com gengibre, 80ml', 6.00),
('Chá Camomila', 'Chá de Camomila, 80ml', 6.00),
('Suco de Laranja', 'Natural in natura e sem açúcar, 150ml', 5.00),
('Suco de Morango', 'Natural in natura, batido, 150ml', 5.00);


-- Inserindo comandas (datas e clientes fictícios)
INSERT INTO comanda (data, mesa, nome_cliente) VALUES
('2025-10-20', 5, 'Hélen Silva'),
('2025-10-20', 2, 'Martin Morales'),
('2025-10-21', 3, 'Alice Morales'),
('2025-10-21', NULL, 'iFood - Marcel'),
('2025-10-22', 1, 'Equipe Projeto'),
('2025-10-25', 4, 'Amora'),
('2025-10-28', 6, 'Seu Bigode'),
('2025-10-28', NULL, 'Uber Eats - Morales');


-- Inserindo itens das comandas (IDs de comanda e cardápio baseiam-se na ordem de inserção acima)
INSERT INTO item_comanda (comanda_id, cardapio_id, quantidade) VALUES
-- Comanda 1 (Hélen): Expresso x2, Chá Camomila x1
(1, 1, 2),
(1, 9, 1),

-- Comanda 2 (Martin): Latte x2
(2, 3, 2),

-- Comanda 3 (Alice): Americano x3
(3, 5, 3),

-- Comanda 4 (Marcel): Mocha x2, Cappuccino x1
(4, 4, 2),
(4, 2, 1),

-- Comanda 5 (Equipe Projeto): Cappuccino x3, Expresso x2, Mocha x3
(5, 2, 3),
(5, 1, 2),
(5, 4, 3),

-- Comanda 6 (Amora): Suco de Laranja x1, Chocolate Quente x2, Chá Verde x1
(6, 10, 1),
(6, 6, 2),
(6, 8, 1),

-- Comanda 7 (Seu Bigode): Suco de Morango x2, Café Gelado x1
(7, 11, 2),
(7, 7, 1),

-- Comanda 8 (Uber Eats - Morales): Chocolate Quente x2
(8, 6, 2);


-- Fim do arquivo base