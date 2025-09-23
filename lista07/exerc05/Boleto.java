import java.math.BigDecimal;

public class Boleto extends FormaPagamento {
    @Override
    public void validarPagamento(String codigoBoleto) {
        if (codigoBoleto == null || !codigoBoleto.matches("\\d{47}")) {
            throw new PagamentoInvalidoException("Código de boleto inválido. Deve ter 47 dígitos numéricos.");
        }
    }

    @Override
    public void processarPagamento(BigDecimal valor, String codigoBoleto) {
        validarPagamento(codigoBoleto);
        System.out.println("Pagamento de R$" + valor + " registrado via Boleto.");
    }
}