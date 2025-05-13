// 07. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

// Importa a biblioteca 'prompt-sync' para permitir entrada de dados pelo terminal
const prompt = require('prompt-sync')();

// Solicita ao usuário que digite o número de maçãs compradas
let quantidade = Number(prompt("Digite o número de maçãs compradas: "));

// Verifica se a quantidade é válida (número inteiro positivo)
if (isNaN(quantidade) || quantidade <= 0 || !Number.isInteger(quantidade)) {
    console.log("Quantidade inválida. Digite um número inteiro maior que zero.");
} else {
    // Determina o preço unitário com base na quantidade comprada
    let precoPorUnidade;

    if (quantidade < 12) {
        // Se for menos de 12 maçãs, cada uma custa R$ 0,30
        precoPorUnidade = 0.30;
    } else {
        // Se for 12 ou mais, cada uma custa R$ 0,25
        precoPorUnidade = 0.25;
    }

    // Calcula o valor total da compra
    let valorTotal = quantidade * precoPorUnidade;

    // Exibe o valor total da compra com duas casas decimais
    console.log(`\nVocê comprou ${quantidade} maçã(s).`);
    console.log(`Valor total a pagar pela(s) maçã(s): R$ ${valorTotal.toFixed(2)}`);
}