// 04. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

// Importa a biblioteca 'prompt-sync' para permitir entrada de dados pelo terminal
const prompt = require('prompt-sync')();

// Exibe o menu com as opções disponíveis
console.log("=== MENU DE ANÁLISE NUMÉRICA ===");
console.log("1 - Par ou ímpar");
console.log("2 - Quadrado do número"); 
console.log("3 - Positivo ou negativo"); 

// Solicita que escolha uma das opções do menu de 1 até 3
const opcao = prompt("*** Escolha uma das opções (1-3): ");

// Solicita que digite um número a ser analisado
const numero = Number(prompt("Digite o número que deseja a informação: "));

// Verifica qual opção o usuário escolheu e executa o bloco de código correspondente
switch (opcao) {
    case '1': 
        if (numero % 2 === 0) {
            console.log("O número é PAR.");
        } else {
            console.log("O número é ÍMPAR.");
        }
        break; 

    case '2': 
        console.log(`O quadrado de ${numero} é ${numero ** 2}`);
        break;

    case '3': 
        if (numero > 0) {
            console.log("O número é POSITIVO.");
        } else if (numero < 0) {
            console.log("O número é NEGATIVO.");
        } else {
            console.log("O número é ZERO.");
        }
        break;

  // Caso digite uma opção diferente, informa que a opção digitada é inválida
    default: 
        console.log("Opção inválida.");
}