public class Bicicleta implements IMeioTransporte {
    private int velocidade = 0;
    private final int VELOCIDADE_MAX = 40;

    @Override
    public void acelerar() {
        if (velocidade + 5 > VELOCIDADE_MAX) {
            throw new VelocidadeInvalidaException("A bicicleta não pode ultrapassar " + VELOCIDADE_MAX + " km/h.");
        }
        velocidade += 5;
    }

    @Override
    public void frear() {
        if (velocidade - 5 < 0) {
            throw new VelocidadeInvalidaException("A bicicleta já está parada.");
        }
        velocidade -= 5;
    }

    @Override
    public int getVelocidade() {
        return velocidade;
    }

    @Override
    public String toString() {
        return "Bicicleta - Velocidade atual: " + velocidade + " km/h";
    }
}
