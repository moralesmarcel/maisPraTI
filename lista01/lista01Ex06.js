/* 06. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
- Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
- Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
- Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
- Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C) */

// Importa a biblioteca 'prompt-sync' para permitir entrada de dados pelo terminal
const prompt = require('prompt-sync')();

// Solicita ao usuário que digite os três lados do triângulo
let A = Number(prompt("Digite o valor do lado A: "));
let B = Number(prompt("Digite o valor do lado B: "));
let C = Number(prompt("Digite o valor do lado C: "));

// Verifica se todos os lados são válidos (maiores que zero)
if (A <= 0 || B <= 0 || C <= 0 || isNaN(A) || isNaN(B) || isNaN(C)) {
    console.log("Erro: Todos os lados devem ser números maiores que zero.");
} else {
    // Verifica se os lados formam um triângulo usando a desigualdade triangular
    if (A < B + C && B < A + C && C < A + B) {
        console.log("\nOs lados formam um triângulo.");

        // Agora identificar o tipo do triângulo
        if (A === B && B === C) {
            console.log("Tipo: Triângulo EQUILÁTERO (todos os lados iguais).");
        } else if (A === B || A === C || B === C) {
            console.log("Tipo: Triângulo ISÓSCELES (dois lados iguais).");
        } else {
            console.log("Tipo: Triângulo ESCALENO (todos os lados diferentes).");
        }

    } else {
        // Caso a desigualdade não seja satisfeita, não é triângulo
        console.log("Os valores fornecidos NÃO formam um triângulo.");
    }
}