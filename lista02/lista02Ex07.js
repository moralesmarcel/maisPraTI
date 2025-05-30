// 07. Mapeamento e Ordenação - Dado um array produtos = [{ nome, preco }, …], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map, sort.

// Importa a biblioteca 'prompt-sync' para permitir entrada de dados pelo terminal
const prompt = require('prompt-sync')();

// Função que ordena os produtos por preço e retorna apenas os nomes
function nomesOrdenadosPorPreco(lista) {
    const copia = [...lista]; // Cria uma cópia para não alterar o array original
    copia.sort((a, b) => a.preco - b.preco); // Ordena por preço crescente
    return copia.map(produto => produto.nome); // Retorna apenas os nomes
}

const produtos = [];

// Solicita ao usuário quantos produtos deseja cadastrar e valida o número
let qtd;
do {
    qtd = Number(prompt("Quantos produtos deseja cadastrar? "));
    if (isNaN(qtd) || qtd <= 0) {
        console.log("Por favor, digite um número inteiro positivo.");
    }
} while (isNaN(qtd) || qtd <= 0);

// Lê os dados de cada produto, com validação
for (let i = 0; i < qtd; i++) {
    console.log(`\nProduto ${i + 1}:`);

    // Solicita o nome do produto (não pode ser vazio)
    let nome;
    do {
        nome = prompt("Nome do produto: ").trim();
        if (!nome) {
            console.log("O nome não pode estar vazio.");
        }
    } while (!nome);

    // Solicita o preço e valida se é um número positivo
    let preco;
    do {
        preco = Number(prompt("Preço do produto (em R$): "));
        if (isNaN(preco) || preco < 0) {
            console.log("Digite um valor numérico válido e não negativo.");
        }
    } while (isNaN(preco) || preco < 0);

    produtos.push({ nome, preco }); // Adiciona ao array
}

// Exibe os produtos cadastrados
console.log("\n***** PRODUTOS DIGITADOS *****");
produtos.forEach(p => console.log(`${p.nome} - R$ ${p.preco.toFixed(2)}`));

// Obtém os nomes ordenados por preço
const nomesOrdenados = nomesOrdenadosPorPreco(produtos);

// Exibe apenas os nomes ordenados por preço
console.log("\n***** NOMES ORDENADOS POR PREÇO CRESCENTE *****");
nomesOrdenados.forEach(nome => console.log(nome));

