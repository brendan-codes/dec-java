
public class Human {
	//attribute
	int strength = 3;
	int stealth = 3;
	int intelligence = 3;
	int health = 100;
	
	
	//method
	public void attack(int humanHealth) {
		humanHealth -= strength;
		System.out.println(humanHealth);
	}

}
