package exerc08;

import java.math.BigDecimal;

public class Pedido {
    private final String cepDestino;
    private final BigDecimal valorTotal;
    private CalculadoraFrete estrategiaFrete;

    public Pedido(String cepDestino, BigDecimal valorTotal, CalculadoraFrete estrategiaFrete) {
        if (cepDestino == null || !cepDestino.matches("\\d{8}")) {
            throw new FreteException("CEP inválido! Deve ter 8 dígitos numéricos.");
        }
        if (valorTotal.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("Valor total não pode ser negativo.");
        }
        this.cepDestino = cepDestino;
        this.valorTotal = valorTotal;
        this.estrategiaFrete = estrategiaFrete;
    }

    public String getCepDestino() {
        return cepDestino;
    }

    public BigDecimal getValorTotal() {
        return valorTotal;
    }

    public void setEstrategiaFrete(CalculadoraFrete estrategiaFrete) {
        this.estrategiaFrete = estrategiaFrete;
    }

    public BigDecimal calcularFrete() {
        if (estrategiaFrete == null) {
            throw new FreteException("Nenhuma estratégia de frete definida.");
        }
        return estrategiaFrete.calcular(this);
    }
}
