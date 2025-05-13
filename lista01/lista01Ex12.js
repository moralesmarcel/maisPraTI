// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

// Importa a biblioteca 'prompt-sync' para permitir entrada de dados pelo terminal
const prompt = require('prompt-sync')();

// Solicita ao usuário que digite um número
const numero = Number(prompt("Digite um número para ver sua tabuada: "));

// Verifica se o valor digitado é um número válido
if (isNaN(numero)) {
    console.log("Valor inválido! Por favor, digite um número.");
} else {
    console.log(`\n=== Tabuada de ${numero} === `);

    // Usa um loop for para calcular e mostrar a tabuada de 1 a 10
    for (let i = 1; i <= 10; i++) {
        // Mostra a multiplicação e o resultado
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
