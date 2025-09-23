public class Main {
    public static void main(String[] args) {
        Produto p1 = new Produto("Smartphone", 2000.00, 5);
        System.out.println("Preço original: " + p1.getPreco());

        // Aplicando desconto válido
        p1.aplicarDesconto(20);
        System.out.println("Preço com 20% de desconto: " + p1.getPreco());

        // Tentando desconto inválido (> 50%)
        try {
            p1.aplicarDesconto(60);
        } catch (DescontoInvalidoException e) {
            System.out.println("Erro: " + e.getMessage());
        }

        // Tentando desconto inválido (negativo)
        try {
            p1.aplicarDesconto(-10);
        } catch (DescontoInvalidoException e) {
            System.out.println("Erro: " + e.getMessage());
        }
    }
}
