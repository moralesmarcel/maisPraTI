import java.math.BigDecimal;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Produto p1 = new Produto("Notebook", new Dinheiro(new BigDecimal("3500.00"), Moeda.BRL));
        Produto p2 = new Produto("Mouse", new Dinheiro(new BigDecimal("150.00"), Moeda.BRL));

        Carrinho carrinho = new Carrinho(new ArrayList<>());
        carrinho = carrinho.adicionarItem(p1, 1);
        carrinho = carrinho.adicionarItem(p2, 2);

        System.out.println("Total do carrinho: " + carrinho.getTotal());

        // Aplicando desconto válido
        carrinho = carrinho.aplicarCupom(new BigDecimal("10"));
        System.out.println("Total com cupom de 10%: " + carrinho.getTotal());

        // Tentando cupom inválido (>30%)
        try {
            carrinho = carrinho.aplicarCupom(new BigDecimal("40"));
        } catch (IllegalArgumentException e) {
            System.out.println("Erro: " + e.getMessage());
        }
    }
}
