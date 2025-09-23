import exerc08.CalculadoraFrete;
import exerc08.Pedido;

import java.math.BigDecimal;

public class Pac implements CalculadoraFrete {
    @Override
    public BigDecimal calcular(Pedido pedido) {
        // Mais barato: taxa fixa menor
        return new BigDecimal("10.00").add(pedido.getValorTotal().multiply(new BigDecimal("0.02")));
    }
}
