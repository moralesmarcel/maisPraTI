import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<FormaPagamento> formas = new ArrayList<>();

        formas.add(new CartaoCredito());
        formas.add(new Boleto());
        formas.add(new Pix());

        try {
            formas.get(0).processarPagamento(new BigDecimal("150.50"), "1234567812345678");
            formas.get(1).processarPagamento(new BigDecimal("300.00"), "12345678901234567890123456789012345678901234567");
            formas.get(2).processarPagamento(new BigDecimal("99.90"), "usuario@email.com");

            // Testando entrada inválida
            formas.get(0).processarPagamento(new BigDecimal("50.00"), "123");
        } catch (PagamentoInvalidoException e) {
            System.out.println("Erro de pagamento: " + e.getMessage());
        }
    }
}
