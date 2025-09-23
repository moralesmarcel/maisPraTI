package exerc03;

import java.math.BigDecimal;

public abstract class Funcionario {
    private String nome;
    private BigDecimal salario;

    public Funcionario(String nome, BigDecimal salario) {
        this.nome = nome;
        this.salario = salario;
    }

    public String getNome() {
        return nome;
    }

    public BigDecimal getSalario() {
        return salario;
    }

    public void setSalario(BigDecimal salario) {
        this.salario = salario;
    }

    // Cada tipo de funcionário implementa o bônus de forma diferente
    public abstract BigDecimal calcularBonus();
}
