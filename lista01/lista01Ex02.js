// 02. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

// Importa a biblioteca 'prompt-sync' para permitir entrada de dados pelo terminal
const prompt = require('prompt-sync')();

// Função que solicita ao usuário uma idade válida, se entrada é inteira e positiva
function obterIdade(mensagem) {
    let idade;

    while (true) {
        let entrada = prompt(mensagem);
        idade = Number(entrada);

        // Verifica se a entrada é um número
        if (isNaN(idade)) {
            console.log("Erro: você não digitou um número.");
        } 
        // Verifica se é um número inteiro
        else if (!Number.isInteger(idade)) {
            console.log("Erro: a idade deve ser um número inteiro.");
        } 
        // Verifica se é um número positivo
        else if (idade < 0) {
            console.log("Erro: a idade não pode ser negativa.");
        } 
        // Se passou todas as validações, retorna a idade
        else {
            return idade;
        }
    }
}

// Chama a função para obter a idade do usuário
let idade = obterIdade("Digite sua idade: ");

// Usa estrutura de controle if-else para classificar a idade
if (idade >= 0 && idade <= 12) {
    console.log("Você é classificado como: CRIANÇA.");
} else if (idade >= 13 && idade <= 17) {
    console.log("Você é classificado como: ADOLESCENTE.");
} else if (idade >= 18 && idade <= 59) {
    console.log("Você é classificado como: ADULTO.");
} else {
    // Qualquer idade a partir de 60 anos
    console.log("Você é classificado como: IDOSO.");
}