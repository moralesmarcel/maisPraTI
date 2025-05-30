// 09. Conversão Entre Formatos - Escreva duas funções: paresParaObjeto(pares) recebe um array de pares [ [chave, valor], … ] e retorna o objeto equivalente; objetoParaPares(obj) faz o nverso, retornando um array de pares.

// Importa a biblioteca prompt-sync para entrada de dados via terminal
const prompt = require('prompt-sync')();

// Função que converte um array de pares [ [chave, valor], ... ] para um objeto
function paresParaObjeto(pares) {
    // Usamos Object.fromEntries, que transforma os pares em um objeto
    return Object.fromEntries(pares);
}

// Função que converte um objeto em um array de pares [ [chave, valor], ... ]
function objetoParaPares(obj) {
    // Usamos Object.entries, que transforma o objeto em um array de pares
    return Object.entries(obj);
}

// Exibe um menu com as duas opções para o usuário
console.log("*** APP DE CONVERSÃO ENTRE FORMATOS ***");
console.log("1 - Converter pares para objeto");
console.log("2 - Converter objeto para pares\n");

// Solicita que o usuário escolha uma das opções
const opcao = prompt("Escolha a opção desejada (1 ou 2): ");

// Opção 1: converter pares para objeto
if (opcao === '1') {
    // Pergunta quantos pares o usuário deseja informar
    const quantidade = Number(prompt("Quantos pares deseja inserir? "));
    const pares = [];

    // Loop para coletar os pares informados pelo usuário
    for (let i = 0; i < quantidade; i++) {
        const chave = prompt(`Digite a chave ${i + 1}: `);
        const valor = prompt(`Digite o valor da chave "${chave}": `);
        pares.push([chave, valor]); // Adiciona o par [chave, valor] ao array
    }

    // Converte os pares para objeto 
    const objetoConvertido = paresParaObjeto(pares);

    // Exibe o objeto resultante da conversão
    console.log("\nObjeto gerado a partir dos pares:");
    console.log(objetoConvertido);

// Opção 2: converter objeto para pares
} else if (opcao === '2') {
    // Pergunta quantas propriedades o usuário quer inserir no objeto
    const quantidade = Number(prompt("Quantas propriedades o objeto terá? "));
    const objeto = {};

    // Loop para coletar as propriedades do objeto
    for (let i = 0; i < quantidade; i++) {
        const chave = prompt(`Digite a chave ${i + 1}: `);
        const valor = prompt(`Digite o valor da chave "${chave}": `);
        objeto[chave] = valor; // Adiciona a propriedade ao objeto
    }

    // Converte o objeto para array de pares usando a função definida anteriormente
    const paresConvertidos = objetoParaPares(objeto);

    // Exibe o array de pares resultante da conversão
    console.log("\nArray de pares gerado a partir do objeto:");
    console.log(paresConvertidos);

} else {
    // Caso o usuário tenha digitado uma opção inválida
    console.log("Opção inválida. Por favor, escolha 1 ou 2.");
}
