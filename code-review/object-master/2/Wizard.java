
public class Wizard extends Human {
	//attribute
	static int health = 50;
	int intelligence = 8;
	
	
	//method
	public void heal(Human h) {
		h.health += intelligence;
	}
	
	public void fireball(Human h) {
		h.health -= (intelligence * 3);
	}
}
