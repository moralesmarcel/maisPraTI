// 01. Validação de Datas - Crie a função "ehDataValida(dia, mes, ano)"" que retorne "true" se os valores formarem uma data real (meses de 28–31 dias,  ano bissexto para fevereiro) e "false" caso contrário.  

// Importa a biblioteca 'prompt-sync' para permitir entrada de dados pelo terminal
const prompt = require('prompt-sync')();

// Função que verifica se um determinado ano é bissexto. Um ano é bissexto se: ele for divisível por 4 e não por 100, ou se for divisível por 400
function ehAnoBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

// Função principal que valida se a data é real e verifica se o dia está dentro dos limites válidos para o mês e ano fornecidos.
function ehDataValida(dia, mes, ano) {
    // Verifica se mês está entre 1 e 12
    if (mes < 1 || mes > 12) {
        return false;
    }

    // Define quantos dias cada mês pode ter
    const diasNoMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Se o mês for fevereiro e o ano for bissexto, altera o número de dias
    if (mes === 2 && ehAnoBissexto(ano)) {
        diasNoMes[1] = 29;
    }

    // Verifica se o dia está dentro do limite para o mês
    return dia >= 1 && dia <= diasNoMes[mes - 1];
}

// Solicita que o usuário digite o dia, mês e ano
const dia = Number(prompt("Digite o dia: "));
const mes = Number(prompt("Digite o mês: "));
const ano = Number(prompt("Digite o ano: "));

// Chama a função de validação e exibe o resultado
if (ehDataValida(dia, mes, ano)) {
    console.log(`✅ A data ${dia}/${mes}/${ano} é válida.`);
} else {
    console.log(`❌ A data ${dia}/${mes}/${ano} é inválida.`);
}
