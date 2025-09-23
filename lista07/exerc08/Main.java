import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        try {
            // Pedido com estratégia inicial PAC
            Pedido pedido = new Pedido("12345678", new BigDecimal("500.00"), new Pac());
            System.out.println("Frete via PAC: R$ " + pedido.calcularFrete());

            // Troca de estratégia para SEDEX
            pedido.setEstrategiaFrete(new Sedex());
            System.out.println("Frete via SEDEX: R$ " + pedido.calcularFrete());

            // Troca de estratégia para Retirada na Loja
            pedido.setEstrategiaFrete(new RetiradaNaLoja());
            System.out.println("Frete via Retirada na Loja: R$ " + pedido.calcularFrete());

            // Estratégia promocional via lambda: frete grátis acima de 300
            pedido.setEstrategiaFrete(p -> {
                if (p.getValorTotal().compareTo(new BigDecimal("300")) > 0) {
                    return BigDecimal.ZERO;
                }
                return new BigDecimal("15.00"); // taxa fixa caso não atinja promoção
            });
            System.out.println("Frete Promocional: R$ " + pedido.calcularFrete());

            // Testando CEP inválido
            Pedido pedidoInvalido = new Pedido("12A456", new BigDecimal("100"), new Pac());
            System.out.println(pedidoInvalido.calcularFrete());

        } catch (FreteException e) {
            System.out.println("Erro de frete: " + e.getMessage());
        }
    }
}
