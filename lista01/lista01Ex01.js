// 01. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

// Importa a biblioteca 'prompt-sync' para permitir entrada de dados pelo terminal
const prompt = require('prompt-sync')();

// Função que solicita ao usuário um número inteiro positivo; Somente retorna quando o valor for válido.
function obterNumeroInteiroPositivo(mensagem) {
    let numero;

    while (true) {
        let entrada = prompt(mensagem);
        numero = Number(entrada);

        // Verificações:
        if (isNaN(numero)) {
            console.log("Erro: você não digitou um número.");
        } else if (!Number.isInteger(numero)) {
            console.log("Erro: o número digitado não é um número inteiro.");
        } else if (numero < 0) {
            console.log("Erro: o número deve ser positivo.");
        } else {
            // Entrada válida
            return numero;
        }
    }
}

// Chamada da função para obter um número válido
let numero = obterNumeroInteiroPositivo("Digite um número inteiro positivo: ");

// Verificação de par ou ímpar
if (numero % 2 === 0) {
    console.log("O número " + numero + " é PAR.");
} else {
    console.log("O número " + numero + " é ÍMPAR.");
}