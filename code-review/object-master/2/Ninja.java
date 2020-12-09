
public class Ninja extends Human {
	int stealth = 10;
	int health = 100;
	
	public void steal(Human h) {
		h.health -= 10;
		this.health += 10;
	}
	
	public void runAway() {
		this.health -= 10;
	}
}
