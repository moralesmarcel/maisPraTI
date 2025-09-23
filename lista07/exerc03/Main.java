import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Funcionario> funcionarios = new ArrayList<>();

        funcionarios.add(new Gerente("Alice", new BigDecimal("10000")));
        funcionarios.add(new Desenvolvedor("Bruno", new BigDecimal("6000")));
        funcionarios.add(new Desenvolvedor("Carla", new BigDecimal("8000")));

        for (Funcionario f : funcionarios) {
            System.out.println(
                    f.getNome() + " - Salário: R$" + f.getSalario() +
                            " - Bônus: R$" + f.calcularBonus()
            );
        }
    }
}
