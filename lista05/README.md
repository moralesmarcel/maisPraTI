# 📇 Lista de Exercícios 5 - Consumo de API com ReactJS

Esta pasta do repositório foi criada para a entrega da "Lista de Exercícios 5 (Atividade 5) - Consumo de API com ReactJS", desenvolvido em React + Vite + Tailwind.   Onde foi criada uma aplicação em React que consume a API do OMDb para permitir que usuários busquem filmes, vejam detalhes e montem uma lista de favoritos.

## 📋 Pré-requisitos

Antes de começar, você precisa ter um navegador web instalado na sua máquina. É recomendado o uso do Google Chrome ou Microsoft Edge.

## ⚙️ Instalação

1. Clone somente esta pasta do repositório. Caso tenha optado clonar todo o repositório *maisPraTI*, siga para o *passo 2* da instalação.
   
    ```bash
    git clone -n https://github.com/moralesmarcel/maisPraTI.git
    cd maisPraTI
    git checkout HEAD lista05
    ```

2. Entre no diretório pertencente a essa _Lista de Exercícios_:

    ```bash
    cd lista05
    ```

3. instale as dependências pertencente a essa _Lista de Exercícios_:

    ```bash
    npm install
    ```

## 🛠️ Como executar o projeto referente a "Lista de Exercícios 5"

Os arquivos estão localizados na pasta do projeto (lista05).

1. Para executar o projeto:
   ```bash
   npm run dev
   ```
   Abra a URL informada no terminal (normalmente `http://localhost:5173`).

## 📂 Estrutura dos arquivos da pasta _lista03_

```bash
/
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
├─ vite.config.js
├─ .env.example
└─ src/
   ├─ api/omdb.js
   ├─ components/MovieCard.jsx
   ├─ hooks/
   │  ├─ useFavorites.js
   │  └─ useLocalStorage.js
   ├─ pages/
   │  ├─ Details.jsx
   │  ├─ Favorites.jsx
   │  └─ Search.jsx
   ├─ index.css
   ├─ styles.css
   ├─ App.jsx
   └─ main.jsx
```

## 📑 Observações

* Certifique-se de estar no diretório correto ao rodar os arquivos.
* A OMDb retorna até 10 resultados por página; o `totalResults` é utilizado para calcular a paginação.
* O *dark mode* usa a estratégia `class` do Tailwind — a classe `dark` é aplicada no `<html>`.
* Os componentes possuem comentários explicando as partes principais do código.
* Este projeto é de código aberto e pode ser utilizado livremente.
* Você pode editar os arquivos diretamente para testar variações dos exercícios.
