// 08. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

// Importa a biblioteca 'prompt-sync' para permitir entrada de dados pelo terminal
const prompt = require('prompt-sync')();

// Solicita o primeiro número ao usuário
let num1 = Number(prompt("Digite o primeiro número: "));

// Solicita o segundo número ao usuário
let num2 = Number(prompt("Digite o segundo número (diferente do primeiro): "));

// Verifica se os dois números são válidos e diferentes
if (isNaN(num1) || isNaN(num2)) {
    console.log("Erro: Você deve digitar valores numéricos.");
} else if (num1 === num2) {
    console.log("Erro: Os números devem ser diferentes.");
} else {
    // Agora comparamos os dois números para organizar em ordem crescente
    console.log("\nOs números em ordem crescente são:");

    if (num1 < num2) {
        console.log(`${num1} - ${num2}`);
    } else {
        console.log(`${num2} - ${num1}`);
    }
}