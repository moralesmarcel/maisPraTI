// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

// // Importa a biblioteca 'prompt-sync' para permitir entrada de dados pelo terminal
const prompt = require('prompt-sync')();

// Solicita o número ao usuário
const numero = Number(prompt("Digite um número inteiro não negativo: "));

// Verifica se o valor digitado é um número válido e não negativo
if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
    console.log("Valor inválido! Por favor, digite um número inteiro não negativo.");
} else {
    // Inicializa a variável que armazena o fatorial
    let fatorial = 1;

    // Usa o loop for para multiplicar todos os valores de 1 até o número
    for (let i = 1; i <= numero; i++) {
        fatorial *= i; // Multiplica o valor atual de fatorial por i
    }

    // Imprime o resultado na tela
    console.log(`O fatorial de ${numero} é: ${fatorial}`);
}
