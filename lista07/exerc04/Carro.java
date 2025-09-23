public class Carro implements IMeioTransporte {
    private int velocidade = 0;
    private final int VELOCIDADE_MAX = 180;

    @Override
    public void acelerar() {
        if (velocidade + 20 > VELOCIDADE_MAX) {
            throw new VelocidadeInvalidaException("O carro não pode ultrapassar " + VELOCIDADE_MAX + " km/h.");
        }
        velocidade += 20;
    }

    @Override
    public void frear() {
        if (velocidade - 20 < 0) {
            throw new VelocidadeInvalidaException("O carro já está parado.");
        }
        velocidade -= 20;
    }

    @Override
    public int getVelocidade() {
        return velocidade;
    }

    @Override
    public String toString() {
        return "Carro - Velocidade atual: " + velocidade + " km/h";
    }
}