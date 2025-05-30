// 04. Fatorial Recursivo - Implemente  function  fatorial(n)  de  forma  recursiva;  trate n < 0  lançando um Error, e n === 0 retornando 1.

// Importa a biblioteca 'prompt-sync' para permitir entrada de dados pelo terminal
const prompt = require('prompt-sync')();

// Função recursiva para calcular o fatorial
function fatorial(n) {
    // Verifica se o número é negativo
    if (n < 0) {
        // Lança um erro se o número for menor que zero
        throw new Error("Não é possível calcular o fatorial de um número negativo.");
    }

    // Caso base: fatorial de 0 é 1
    if (n === 0) {
        return 1;
    }

    // Chamada recursiva: n! = n * (n-1)!
    return n * fatorial(n - 1);
}

// Solicita ao usuário que digite um número
const numero = Number(prompt("Digite um número inteiro não negativo para calcular o fatorial: "));

// Valida se o valor digitado é um número inteiro
if (!Number.isInteger(numero)) {
    console.log("Por favor, digite um número inteiro válido.");
} else {
    try {
        // Tenta calcular o fatorial e exibir o resultado
        const resultado = fatorial(numero);
        console.log(`O fatorial de ${numero} é: ${resultado}`);
    } catch (erro) {
        // Se ocorrer erro (por exemplo, número negativo), exibe a mensagem
        console.log("Erro:", erro.message);
    }
}
