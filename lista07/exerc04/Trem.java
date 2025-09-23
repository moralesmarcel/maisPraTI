public class Trem implements IMeioTransporte {
    private int velocidade = 0;
    private final int VELOCIDADE_MAX = 300;

    @Override
    public void acelerar() {
        if (velocidade + 50 > VELOCIDADE_MAX) {
            throw new VelocidadeInvalidaException("O trem não pode ultrapassar " + VELOCIDADE_MAX + " km/h.");
        }
        velocidade += 50;
    }

    @Override
    public void frear() {
        if (velocidade - 50 < 0) {
            throw new VelocidadeInvalidaException("O trem já está parado.");
        }
        velocidade -= 50;
    }

    @Override
    public int getVelocidade() {
        return velocidade;
    }

    @Override
    public String toString() {
        return "Trem - Velocidade atual: " + velocidade + " km/h";
    }
}