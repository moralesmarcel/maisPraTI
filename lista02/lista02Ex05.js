// 05. Debounce - Crie function debounce(fn, delay) que receba uma função fn e um delay em ms, retornando uma nova função que só executa fn se não for chamada novamente dentro do intervalo.

// Importa a biblioteca 'prompt-sync' para permitir entrada de dados pelo terminal
const prompt = require('prompt-sync')();

// Função debounce que controla o tempo entre as execuções
function debounce(fn, delay) {
    let timeoutId;

    return function(...args) {
        // Se a função for chamada novamente, cancela a execução anterior
        clearTimeout(timeoutId);

        // Define um novo temporizador
        timeoutId = setTimeout(() => {
            fn(...args); // Executa a função após o tempo sem novas chamadas
        }, delay);
    };
}

// Função que simula uma ação final (ex: busca, envio, processamento)
function processarTexto(texto) {
    console.log(`\nEntrada processada com sucesso: "${texto}"`);
}

// Criando a função com debounce de 2 segundos
const debouncedFunc = debounce(processarTexto, 2000);

// Mensagem inicial para o usuário
console.log("***** DIGITE SUAS MENSAGENS *****");
console.log("Digite um texto e pressione ENTER várias vezes.");
console.log("A função só será executada se você parar por 2 segundos.\n");

// Loop que permite digitar várias mensagens
while (true) {
    const entrada = prompt("Digite algo (ou 'sair' para encerrar): ");

    // Se o usuário quiser sair do programa
    if (entrada.toLowerCase() === 'sair') {
        console.log("Encerrando o programa...");
        break;
    }

    // Chama a função com debounce
    debouncedFunc(entrada);
}
