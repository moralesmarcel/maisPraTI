// 05. Debounce - Crie function debounce(fn, delay) que receba uma função fn e um delay em ms, retornando uma nova função que só executa fn se não for chamada novamente dentro do intervalo.

// Importa a biblioteca 'prompt-sync' para permitir que o usuário digite no terminal
const prompt = require("prompt-sync")();

// Tem a função de evitar que ela seja executada várias vezes seguidas; tem um "delay" para ver se o usuário para de chamar, só então é executada.
function debounce(fn, delay) {
  // Variável que vai guardar o identificador do temporizador
  let timeoutId;

  // Retorna uma nova função que controla o tempo de execução
  return function (...args) {
    // Cancela qualquer execução anterior que ainda não aconteceu
    clearTimeout(timeoutId);

    // Cria um novo temporizador; se não for chamado de novo nesse tempo, a função é executada
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

// Função que mostra a mensagem digitada, simulando um processamento
function processarTexto(texto) {
  console.log(`\nEntrada processada com sucesso: "${texto}"`);
}

// Cria uma versão "com tempo de espera" da função "processarTexto", será executada se não for digitado nada por 2 segundos (2000 milissegundos)
const debouncedFunc = debounce(processarTexto, 2000);

// Mensagem inicial no terminal
console.log("***** DIGITE SUAS MENSAGENS *****");
console.log("Digite um texto e pressione ENTER várias vezes.");
console.log(
  "A função só será executada se você parar de digitar por 2 segundos.\n"
);

// Loop, até o usuario digitar "sair"
while (true) {
  const entrada = prompt("Digite algo (ou 'sair' para encerrar): ");

  // Se o usuário digitar "sair", o programa é encerrado
  if (entrada.toLowerCase() === "sair") {
    console.log("Encerrando o programa...");
    break;
  }

  // Chama a função "com espera"
  debouncedFunc(entrada);
}
