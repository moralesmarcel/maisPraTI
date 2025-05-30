// 02. Jogo de Adivinhação - Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar. Use while para repetir até acertar, contando tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado. 

// Importa a biblioteca 'prompt-sync' para permitir entrada de dados pelo terminal
const prompt = require('prompt-sync')();

// Gera um número aleatório de 1 a 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Inicializa contador de tentativas
let tentativas = 0;

// Variável para armazenar o palpite do usuário
let palpite;

// Exibe mensagem de boas-vindas ao jogo
console.log("--- JOGO DE ADIVINHAÇÃO ---");
console.log("Tente adivinhar o número secreto entre 1 e 100!");

// Loop 'while' para repetir enquanto o palpite estiver errado
while (palpite !== numeroSecreto) {
    // Solicita que o usuário digite um número
    palpite = Number(prompt("Digite seu palpite: "));

    // Incrementa o número de tentativas
    tentativas++;

    // Verifica se o palpite é igual ao número secreto
    if (palpite === numeroSecreto) {
        console.log(`\n🎉🎈 Parabéns! \nVocê acertou o número ${numeroSecreto} em ${tentativas} tentativas. \n`);
    } else if (palpite < numeroSecreto) {
        console.log("🔼 O número secreto é MAIOR que isso.");
    } else if (palpite > numeroSecreto) {
        console.log("🔽 O número secreto é MENOR que isso.");
    } else {
        // Se o usuário digitar algo inválido (ex: texto)
        console.log("❌ Por favor, digite um número válido.");
    }
}
