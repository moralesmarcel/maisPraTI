// 08. Agrupamento por Propriedade - Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus total.

// Importa a biblioteca prompt-sync para entrada de dados via terminal
const prompt = require('prompt-sync')();

// Array que armazenará os objetos de venda (cliente e total)
let vendas = [];

// Função para adicionar uma nova venda
function adicionarVenda() {
    const cliente = prompt("Digite o nome do cliente: ");
    const total = parseFloat(prompt("Digite o valor total da venda: "));

    // Valida se o valor é um número positivo
    if (!isNaN(total) && total > 0) {
        vendas.push({ cliente, total }); // Adiciona o objeto venda ao array
        console.log("Venda registrada com sucesso!\n");
    } else {
        console.log("Valor inválido. A venda não foi registrada.\n");
    }
}

// Função para gerar o relatório de totais por cliente
function gerarRelatorio() {
    // Utiliza reduce para agrupar os totais por cliente
    const totaisPorCliente = vendas.reduce((acumulador, venda) => {
        if (!acumulador[venda.cliente]) {
            acumulador[venda.cliente] = 0;
        }
        acumulador[venda.cliente] += venda.total;
        return acumulador;
    }, {});

    console.log("\n*** Relatório de Vendas por Cliente ***");
    for (const cliente in totaisPorCliente) {
        console.log(`${cliente}: R$ ${totaisPorCliente[cliente].toFixed(2)}`);
    }
    console.log();
}

// Função para encontrar o cliente com maior e menor volume de compras
function mostrarMaiorEMenorCliente() {
    const totaisPorCliente = vendas.reduce((acumulador, venda) => {
        if (!acumulador[venda.cliente]) {
            acumulador[venda.cliente] = 0;
        }
        acumulador[venda.cliente] += venda.total;
        return acumulador;
    }, {});

    let maiorCliente = null;
    let menorCliente = null;
    let maiorValor = -Infinity;
    let menorValor = Infinity;

    for (const cliente in totaisPorCliente) {
        const total = totaisPorCliente[cliente];
        if (total > maiorValor) {
            maiorValor = total;
            maiorCliente = cliente;
        }
        if (total < menorValor) {
            menorValor = total;
            menorCliente = cliente;
        }
    }

    if (maiorCliente && menorCliente) {
        console.log(`\nCliente com MAIOR total de compras: ${maiorCliente} - R$ ${maiorValor.toFixed(2)}`);
        console.log(`Cliente com MENOR total de compras: ${menorCliente} - R$ ${menorValor.toFixed(2)}\n`);
    } else {
        console.log("Nenhuma venda registrada para análise.\n");
    }
}

// Menu interativo
let opcao;
do {
    console.log("===> MENU DE VENDAS <===");
    console.log("1 - Registrar nova venda");
    console.log("2 - Exibir relatório por cliente");
    console.log("3 - Mostrar maior e menor comprador");
    console.log("4 - Sair\n");
    opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
        case '1':
            adicionarVenda();
            break;
        case '2':
            gerarRelatorio();
            break;
        case '3':
            mostrarMaiorEMenorCliente();
            break;
        case '4':
            console.log("Encerrando o programa...\n");
            break;
        default:
            console.log("Opção inválida. Tente novamente.\n");
    }
} while (opcao !== '4');
