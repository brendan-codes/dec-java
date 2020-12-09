
public class Bat extends Mammal {
	
	public Bat(int energy) {
		super(energy);
		System.out.println("Bat's Energy Level: " + energy);
	}
	
	
	public void fly() {
		energyLevel -= 50;
		System.out.println("Bat took flight. Energy Level (-50): " + energyLevel);
	}
	
	public void eatHumans() {
		energyLevel += 25;
		System.out.println("Bat at a Human. Energy Level (+25): " + energyLevel);
	}
	
	public void attackTown() {
		energyLevel -= 100;
		System.out.println("Bat destroyed the town. Energy Level (-100): " + energyLevel);
	}
	
	
}
