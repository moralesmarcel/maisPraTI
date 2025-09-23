import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Carrinho {
    private final List<ItemCarrinho> itens;

    public Carrinho(List<ItemCarrinho> itens) {
        this.itens = Collections.unmodifiableList(new ArrayList<>(itens));
    }

    public List<ItemCarrinho> getItens() {
        return itens;
    }

    public Carrinho adicionarItem(Produto produto, int quantidade) {
        List<ItemCarrinho> novosItens = new ArrayList<>(this.itens);
        novosItens.add(new ItemCarrinho(produto, quantidade));
        return new Carrinho(novosItens);
    }

    public Carrinho removerItem(String nomeProduto) {
        List<ItemCarrinho> novosItens = new ArrayList<>(this.itens);
        novosItens.removeIf(item -> item.getProduto().getNome().equalsIgnoreCase(nomeProduto));
        return new Carrinho(novosItens);
    }

    public Dinheiro getTotal() {
        BigDecimal total = BigDecimal.ZERO;
        Moeda moeda = Moeda.BRL;
        for (ItemCarrinho item : itens) {
            total = total.add(item.getTotal().getValor());
            moeda = item.getTotal().getMoeda();
        }
        return new Dinheiro(total, moeda);
    }

    public Carrinho aplicarCupom(BigDecimal porcentagem) {
        Dinheiro totalComDesconto = getTotal().aplicarDesconto(porcentagem);
        Produto desconto = new Produto("DESCONTO",
                new Dinheiro(totalComDesconto.getValor().subtract(getTotal().getValor()).abs(), Moeda.BRL));
        List<ItemCarrinho> novosItens = new ArrayList<>(this.itens);
        novosItens.add(new ItemCarrinho(desconto, 1));
        return new Carrinho(novosItens);
    }
}