// 06. Memoization - Implemente  function memoize(fn)  que  armazene  em  cache  chamadas anteriores de fn (por argumentos), retornando resultados instantâneos em repetidas invocações.

// Importa a biblioteca 'prompt-sync' para permitir entrada de dados pelo terminal
const prompt = require('prompt-sync')();


// Armazena os resultados anteriores em cache para evitar recomputações.
function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args); // cria chave única baseada nos argumentos

        if (cache[key] !== undefined) {
            console.log(`🔁 Resultado de fibonacci(${args}) vindo do cache.`);
            return cache[key];
        }

        const result = fn(...args); // calcula normalmente se não estiver no cache
        cache[key] = result;
        return result;
    };
}

// Função recursiva para calcular o n-ésimo número da sequência de Fibonacci.
function fibonacci(n) {
    if (n < 0) {
        throw new Error("O número deve ser zero ou positivo.");
    } else if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacciMemo(n - 1) + fibonacciMemo(n - 2); // Chamada recursiva usando versão memoizada
    }
}

// Aplica memoization à função fibonacci
const fibonacciMemo = memoize(fibonacci);

// Interface de uso
console.log("---> CÁLCULO DE FIBONACCI COM MEMOIZATION <---");

while (true) {
    const entrada = prompt("Digite um número inteiro não-negativo (ou 'sair' para encerrar): ");

    if (entrada.toLowerCase() === "sair") {
        console.log("Encerrando o programa...\n");
        break;
    }

    const numero = Number(entrada);

    if (isNaN(numero) || !Number.isInteger(numero) || numero < 0) {
        console.log("Por favor, digite um número inteiro não-negativo.");
        continue;
    }

    const resultado = fibonacciMemo(numero);
    console.log(`✅ O ${numero}º número da sequência de Fibonacci é ${resultado}`);
}
