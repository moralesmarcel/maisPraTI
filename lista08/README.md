# 📇 Lista de Exercícios 8 - Modelando, Construindo e Pesquisando

Este repositório contém a resolução da **Lista 8 - Modelando, Construindo e Pesquisando**, organizada em 5 atividades independentes.  

## 📋 Pré-requisitos

Antes de começar, você precisa ter o [MySQL (versão 8+ recomendada)](https://dev.mysql.com/downloads/installer/).

## ⚙️ Instalação

1. Clone somente esta pasta do repositório. Mas, caso tenha optado clonar todo o repositório *maisPraTI*, siga para o *passo 2* da instalação.

    ```bash
    git clone -n https://github.com/moralesmarcel/maisPraTI.git
    cd maisPraTI
    git checkout HEAD lista08
    ```

2. Entre no diretório pertencente a essa _Lista de Exercícios_:

    ```bash
    cd lista08
    ```

## 📂 Estrutura dos arquivos da pasta lista08

    ```bash
    /
    ├── base_bomgosto.sql   # Arquivo principal que cria as tabelas (`cardapio`, `comanda`, `item_comanda`) e insere dados de exemplo.
    ├── questao_01.sql      # Query para listagem do cardápio ordenada por nome.
    ├── questao_02.sql      # Query que apresenta comandas e os itens com preço total por item.
    ├── questao_03.sql      # Query com o valor total de cada comanda.
    ├── questao_04.sql      # Mesma da 03, filtrando apenas comandas com mais de um tipo de café.
    ├── questao_05.sql      # Faturamento total por data.
    └── README.md           # Documentação do projeto.
    ```

## 🛠️ Como rodar os scripts

1. Crie um banco de dados:
    ```bash
    mysql -u root -p -e "CREATE DATABASE bomgosto_db;"
    ```

2. Execute cada questão separadamente, por exemplo:
    ```bash
    mysql -u root -p bomgosto_db < questao_01.sql
    ```

Cada script `questao_*.sql` já carrega o arquivo base via `SOURCE base_bomgosto.sql`, garantindo execução independente.


## 📑 Observações
* O arquivo `base_bomgosto.sql` remove e recria as tabelas, portanto os dados são sempre reinseridos.

* O uso de CHECK é compatível a partir do MySQL 8.0.16; em versões mais antigas, o MySQL ignora os CHECK sem erro.

* Certifique-se de estar no diretório correto ao rodar os arquivos.

* Este projeto é de código aberto e pode ser utilizado livremente.

* Você pode editar os arquivos diretamente para testar variações dos exercícios.
