public class Main {
    public static void main(String[] args) {
        try {
            // Criando instância válida
            Produto p1 = new Produto("Notebook", 3500.00, 10);
            System.out.println(p1);

            // Alterando valores válidos
            p1.setPreco(2999.90);
            p1.setQuantidadeEmEstoque(15);
            System.out.println("Após atualização: " + p1);

            // Tentando atribuições inválidas
            try {
                p1.setPreco(-100.0);
            } catch (IllegalArgumentException e) {
                System.out.println("Erro ao definir preço: " + e.getMessage());
            }

            try {
                p1.setQuantidadeEmEstoque(-5);
            } catch (IllegalArgumentException e) {
                System.out.println("Erro ao definir quantidade: " + e.getMessage());
            }

            try {
                p1.setNome("");
            } catch (IllegalArgumentException e) {
                System.out.println("Erro ao definir nome: " + e.getMessage());
            }

        } catch (IllegalArgumentException e) {
            System.out.println("Erro ao criar produto: " + e.getMessage());
        }
    }
}
