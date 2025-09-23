package exerc03;

import java.math.BigDecimal;

public class Desenvolvedor extends Funcionario {

    public Desenvolvedor(String nome, BigDecimal salario) {
        super(nome, salario);
    }

    @Override
    public BigDecimal calcularBonus() {
        // Desenvolvedor ganha 10% de bônus
        return getSalario().multiply(new BigDecimal("0.10"));
    }
}
