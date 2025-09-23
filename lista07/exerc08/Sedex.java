package exerc08;

import java.math.BigDecimal;

public class Sedex implements CalculadoraFrete {
    @Override
    public BigDecimal calcular(Pedido pedido) {
        // Regra simples: frete fixo + percentual do valor
        return new BigDecimal("20.00").add(pedido.getValorTotal().multiply(new BigDecimal("0.05")));
    }
}
