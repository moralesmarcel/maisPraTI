import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<IMeioTransporte> transportes = new ArrayList<>();

        transportes.add(new Carro());
        transportes.add(new Bicicleta());
        transportes.add(new Trem());

        for (IMeioTransporte t : transportes) {
            System.out.println("\nTestando: " + t.getClass().getSimpleName());

            try {
                t.acelerar();
                t.acelerar();
                System.out.println(t);
                t.frear();
                System.out.println(t);
            } catch (VelocidadeInvalidaException e) {
                System.out.println("Erro: " + e.getMessage());
            }
        }
    }
}
