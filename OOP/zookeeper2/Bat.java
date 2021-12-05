public class Bat extends Mammal {
	private int fly;
	private int eatHumans;
	private int attackTown;
	
	public void fly() {
		System.out.println("SHWOOOOOOP!");
		energyLevel -= 50;
	}

	public void eatHumans() {
		System.out.println("CHOMP!");
		energyLevel += 25;
	}
	
	public void attackTown() {
		System.out.println("(panicked screams)");
		energyLevel -= 100;
	}
}
