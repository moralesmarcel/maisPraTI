package exerc03;

import java.math.BigDecimal;

public class Gerente extends Funcionario {

    public Gerente(String nome, BigDecimal salario) {
        super(nome, salario);
    }

    @Override
    public BigDecimal calcularBonus() {
        // Gerente ganha 20% de bônus
        return getSalario().multiply(new BigDecimal("0.20"));
    }
}
