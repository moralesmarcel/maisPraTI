// 09. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.

// Declaração do do atraso de tempo em 1000 milissegundos = 1 segundo
const tempoIntervalo = 1000; 

// Laço para agendar a exibição de cada número com atraso crescente
for (let i = 10; i >= 1; i--) {
    // Multiplica o tempo pelo número de iteração para espaçar cada exibição
    setTimeout(() => {
        console.log(i); // Exibe o número atual
        // Quando chegar em 1, mostra a mensagem final
        if (i === 1) {
            console.log("Contagem regressiva concluída!");
        }
    }, (10 - i) * tempoIntervalo);
}