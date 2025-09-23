import java.math.BigDecimal;

public abstract class FormaPagamento {
    public abstract void validarPagamento(String dados);
    public abstract void processarPagamento(BigDecimal valor, String dados);
}