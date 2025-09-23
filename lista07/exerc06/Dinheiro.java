import java.math.BigDecimal;
import java.util.Objects;
import java.math.RoundingMode;

public final class Dinheiro {
    private final BigDecimal valor;
    private final Moeda moeda;

    public Dinheiro(BigDecimal valor, Moeda moeda) {
        if (valor == null || valor.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("Valor não pode ser negativo.");
        }
        if (moeda == null) {
            throw new IllegalArgumentException("Moeda não pode ser nula.");
        }
        this.valor = valor.setScale(2, RoundingMode.HALF_EVEN);  // arredondamento bancário
        this.moeda = moeda;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public Moeda getMoeda() {
        return moeda;
    }

    public Dinheiro aplicarDesconto(BigDecimal porcentagem) {
        if (porcentagem.compareTo(new BigDecimal("0")) < 0 ||
                porcentagem.compareTo(new BigDecimal("30")) > 0) {
            throw new IllegalArgumentException("Cupom inválido! Deve ser entre 0% e 30%.");
        }
        BigDecimal fator = BigDecimal.ONE.subtract(porcentagem.divide(new BigDecimal("100")));
        return new Dinheiro(valor.multiply(fator), moeda);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Dinheiro)) return false;
        Dinheiro dinheiro = (Dinheiro) o;
        return valor.equals(dinheiro.valor) && moeda == dinheiro.moeda;
    }

    @Override
    public int hashCode() {
        return Objects.hash(valor, moeda);
    }

    @Override
    public String toString() {
        return moeda + " " + valor;
    }
}
