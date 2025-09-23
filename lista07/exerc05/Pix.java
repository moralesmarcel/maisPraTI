import java.math.BigDecimal;

public class Pix extends FormaPagamento {
    @Override
    public void validarPagamento(String chavePix) {
        if (chavePix == null || chavePix.trim().isEmpty()) {
            throw new PagamentoInvalidoException("Chave Pix não pode ser vazia.");
        }

        // Exemplo simples: aceitar e-mail ou chave numérica de 11 dígitos
        if (!(chavePix.matches("^[\\w.-]+@[\\w.-]+\\.[a-z]{2,}$") || chavePix.matches("\\d{11}"))) {
            throw new PagamentoInvalidoException("Chave Pix inválida. Use e-mail ou CPF numérico de 11 dígitos.");
        }
    }

    @Override
    public void processarPagamento(BigDecimal valor, String chavePix) {
        validarPagamento(chavePix);
        System.out.println("Pagamento de R$" + valor + " realizado via Pix.");
    }
}