// 03. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

// Importa a biblioteca 'prompt-sync' para permitir entrada de dados pelo terminal
const prompt = require('prompt-sync')();

// Função que solicita uma nota válida de 0 a 10; 
// Garante que o valor seja numérico e dentro do intervalo permitido
function obterNota(mensagem) {
    let nota;

    while (true) {
        // Solicita que o usuário digite uma nota
        let entrada = prompt(mensagem);

        // Converte a entrada (string) para número
        nota = Number(entrada);

        // Verifica se o valor é realmente um número
        if (isNaN(nota)) {
            console.log("Erro: você não digitou um número.");
        } 
        // Verifica se a nota está dentro do intervalo permitido (0 a 10)
        else if (nota < 0 || nota > 10) {
            console.log("Erro: a nota deve estar entre 0 e 10.");
        } 
        // Se todas as validações forem aprovadas, retorna a nota
        else {
            return nota;
        }
    }
}

// Chama a função para obter a nota do usuário
let nota = obterNota("Digite a nota do aluno (de 0 a 10): ");

// Classificação da nota com if-else if
if (nota >= 6) {
    console.log("Situação: Aprovado");
} else if (nota >= 5) {
    // Entre 5 e 5.9
    console.log("Situação: Recuperação");
} else {
    // Abaixo de 5
    console.log("Situação: Reprovado");
}