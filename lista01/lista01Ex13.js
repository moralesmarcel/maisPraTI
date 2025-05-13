// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

// Importa a biblioteca 'prompt-sync' para permitir entrada de dados pelo terminal
const prompt = require('prompt-sync')();

// Variáveis para acumular a soma e contar a quantidade de números digitados
let soma = 0;
let quantidade = 0;

console.log("Digite números decimais. Digite o 0 para encerrar a aplicação.");

// Loop para ler números até que se digite o 0
while (true) {
    // Lê o número digitado e converte para tipo Number
    let numero = Number(prompt("Digite um número: "));

    // Verifica se o valor digitado é realmente um número
    if (isNaN(numero)) {
        console.log("Valor inválido. Por favor, digite um número decimal.");
        continue;
    }

    // Se o número digitado for 0, encerra
    if (numero === 0) {
        break;
    }

    // Soma o número à variável acumuladora
    soma += numero;

    // Incrementa a quantidade de números digitados
    quantidade++;
}

// Verifica se algum número foi digitado antes do 0
if (quantidade === 0) {
    console.log("\nNenhum número foi digitado. Não é possível calcular a média.");
} else {
    // Calcula a média aritmética
    let media = soma / quantidade;

    // Exibe o resultado com duas casas decimais
    console.log(`\nVocê digitou ${quantidade} número(s).`);
    console.log(`A média aritmética é: ${media.toFixed(2)}`);
}
