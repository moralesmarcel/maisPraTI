// 05. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

// Importa a biblioteca 'prompt-sync' para permitir entrada de dados pelo terminal
const prompt = require('prompt-sync')();

// O IMC = peso / (altura * altura)

// Solicita ao usuário que informe o peso
let peso = Number(prompt("Digite seu peso em kg (ex: 70): "));

// Verifica se o valor digitado é um número válido e positivo
if (isNaN(peso) || peso <= 0) {
    console.log("Peso inválido. Digite um número maior que zero.");
} else {
    // Solicita que o usuário informe a altura
    let altura = Number(prompt("Digite sua altura em metros (ex: 1.75): "));

    // Verifica se a altura é válida
    if (isNaN(altura) || altura <= 0) {
        console.log("Altura inválida. Digite um número maior que zero.");
    } else {
        // Calcula o IMC
        let imc = peso / (altura * altura);

        // Exibe o IMC com duas casas decimais
        console.log("\nSeu IMC é: " + imc.toFixed(2));

        // Classifica o IMC com base nos valores padrão da OMS
        if (imc < 18.5) {
            console.log("Classificação: Baixo peso");
        } else if (imc < 25) {
            console.log("Classificação: Peso normal");
        } else if (imc < 30) {
            console.log("Classificação: Sobrepeso");
        } else {
            console.log("Classificação: Obesidade");
        }
    }
}