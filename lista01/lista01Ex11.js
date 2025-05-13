// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

// Importa o módulo prompt-sync para permitir entrada de dados no terminal
const prompt = require('prompt-sync')();

// Inicia a variável que vai acumular a soma
let soma = 0;

// Usa um loop for para repetir o processo 5 vezes
for (let i = 1; i <= 5; i++) {
    // Solicita ao usuário que digite um número
    const numero = Number(prompt(`Digite o ${i}º número: `));

    // Verifica se o valor digitado é realmente um número
    if (isNaN(numero)) {
        console.log("Valor inválido! Por favor, digite um número.");
        i--; // Decrementa o contador para repetir esta tentativa
        continue; // Pula para a próxima repetição do loop
    }

    // Adiciona o número à variável soma
    soma += numero;
}

// Exibe a soma total dos 5 números
console.log(`\nA soma total dos números digitados é: ${soma}`);
