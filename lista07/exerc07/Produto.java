public class Produto implements Identificavel<Integer> {
    private final Integer id;
    private final String nome;

    public Produto(Integer id, String nome) {
        if (nome == null || nome.trim().isEmpty()) {
            throw new IllegalArgumentException("Nome não pode ser vazio.");
        }
        this.id = id;
        this.nome = nome;
    }

    @Override
    public Integer getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    @Override
    public String toString() {
        return "Produto{id=" + id + ", nome='" + nome + "'}";
    }
}
