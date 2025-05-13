// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

// Importa a biblioteca 'prompt-sync' para permitir entrada de dados pelo terminal
const prompt = require('prompt-sync')();

// Solicita ao usuário que digite um número
const numero = Number(prompt("Digite um número inteiro: "));

// Verifica se o número digitado é realmente um número inteiro
if (!Number.isInteger(numero)) {
    console.log("Por favor, digite um número inteiro válido.");
} else {
    // Usa um loop for para repetir a exibição do número 10 vezes
    for (let i = 1; i <= 10; i++) {
        // Mostra o número e a repetição atual
        console.log(`${i}ª vez: ${numero}`);
    }
}