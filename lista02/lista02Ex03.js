// 03. Palavras Únicas - Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array. 

// Importa a biblioteca 'prompt-sync' para permitir entrada de dados pelo terminal
const prompt = require('prompt-sync')();

// Solicita que o usuário digite uma frase
const frase = prompt("Digite uma frase (ex: 'olá olá mundo mundo'): ");

// Converte a frase em minúsculas para evitar problemas com letras maiúsculas e divide em palavras
const palavras = frase.toLowerCase().split(" ");

// Cria um objeto (mapa) para contar quantas vezes cada palavra aparece
const contagem = {};  // Exemplo: { 'olá': 2, 'mundo': 2 }

// Laço 'for' para contar a frequência de cada palavra
for (let i = 0; i < palavras.length; i++) {
    const palavra = palavras[i];

    // Se a palavra já está no objeto, incrementa o valor
    if (contagem[palavra]) {
        contagem[palavra]++;
    } else {
        // Se a palavra não está no objeto, inicia com 1
        contagem[palavra] = 1;
    }
}

// Cria um array para armazenar as palavras que aparecem somente uma vez
const unicas = [];

// Laço 'for...in' para percorrer o objeto 'contagem'
for (let palavra in contagem) {
    // Se a contagem for 1, adiciona ao array de palavras únicas
    if (contagem[palavra] === 1) {
        unicas.push(palavra);
    }
}

// Exibe o resultado final
console.log("\nPalavras únicas encontradas:");
console.log(unicas);
