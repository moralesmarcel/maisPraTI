//15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for

// A sequência de Fibonacci começa com 0 e 1. Cada número seguinte é a soma dos dois anteriores: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...

// Importa a biblioteca 'prompt-sync' para permitir entrada de dados pelo terminal
const prompt = require('prompt-sync')();

// Define os dois primeiros números da sequência
let primeiro = 0;
let segundo = 1;

// Mostra uma mensagem informando o que será exibido
console.log("=== Os 10 primeiros números da sequência de Fibonacci ===");

// Usa um loop for para calcular e exibir os 10 primeiros termos
for (let i = 1; i <= 10; i++) {
    // Exibe o número atual da sequência
    console.log(`${i}º termo: ${primeiro}`);

    // Calcula o número da sequência (soma dos dois anteriores)
    let proximo = primeiro + segundo;

    // Atualiza os valores para a próxima iteração
    primeiro = segundo;
    segundo = proximo;
}