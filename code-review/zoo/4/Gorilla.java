
public class Gorilla extends Mammal {
	
	public Gorilla(int energy) {
		super(energy);
		System.out.println("Gorilla's Energy Level: " + energy);
	}

	public void throwSomething() {
		energyLevel -= 5;
		System.out.println("Gorilla threw something. Energy level (-5): " + energyLevel);
	}
	
	public void eatBananas() {
		energyLevel +=10;
		System.out.println("Gorilla ate a banana. Energy level (+10): " + energyLevel);
	}
	
	public void climb() {
		energyLevel -= 10;
		System.out.println("Gorilla climbed a tree. Energy level (-10): " + energyLevel);
	}
}
