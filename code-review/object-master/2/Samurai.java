
public class Samurai extends Human {
	int health = 200;
	public static int numberOfSamurai = 0;
	
	public Samurai() {
		numberOfSamurai++;
	}
	
	public void deathBlow(Human h) {
		h.health = 0;
		this.health /= 2;
	}
		
	public void meditate() {
		this.health += (this.health /= 2);
	}
}
