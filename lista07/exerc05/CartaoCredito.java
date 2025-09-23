import java.math.BigDecimal;

public class CartaoCredito extends FormaPagamento {
    @Override
    public void validarPagamento(String numeroCartao) {
        if (numeroCartao == null || !numeroCartao.matches("\\d{16}")) {
            throw new PagamentoInvalidoException("Número de cartão inválido. Deve ter 16 dígitos numéricos.");
        }
    }

    @Override
    public void processarPagamento(BigDecimal valor, String numeroCartao) {
        validarPagamento(numeroCartao);
        System.out.println("Pagamento de R$" + valor + " realizado com Cartão de Crédito.");
    }
}