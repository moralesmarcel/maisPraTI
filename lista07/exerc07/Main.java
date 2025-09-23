public class Main {
    public static void main(String[] args) {
        // Repositório de Produtos
        InMemoryRepository<Produto, Integer> repoProdutos = new InMemoryRepository<>();
        repoProdutos.salvar(new Produto(1, "Notebook"));
        repoProdutos.salvar(new Produto(2, "Mouse"));

        System.out.println("Produtos:");
        repoProdutos.listarTodos().forEach(System.out::println);

        // Buscar produto
        repoProdutos.buscarPorId(1).ifPresent(p -> System.out.println("Encontrado: " + p));

        // Remover produto
        repoProdutos.remover(2);
        System.out.println("Após remoção: " + repoProdutos.listarTodos());

        // Repositório de Funcionários
        InMemoryRepository<Funcionario, String> repoFuncionarios = new InMemoryRepository<>();
        repoFuncionarios.salvar(new Funcionario("F001", "Alice"));
        repoFuncionarios.salvar(new Funcionario("F002", "Bruno"));

        System.out.println("\nFuncionários:");
        repoFuncionarios.listarTodos().forEach(System.out::println);

        // Teste de remoção inválida
        try {
            repoFuncionarios.remover("F999");
        } catch (EntidadeNaoEncontradaException e) {
            System.out.println("Erro: " + e.getMessage());
        }
    }
}
