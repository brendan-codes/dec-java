
public class Samurai extends Human{
	private static int samuraiCounter = 0;
	
	public Samurai() {
		this.setHealth(200);
		samuraiCounter++;
	}
	
	
	public void deathBlow(Human target) {
		target.setHealth(0);
		this.setHealth(this.getHealth() / 2);
	}
	
	
	public void meditate() {
		this.setHealth(200);
	}
	
	
	public int howMany() {
		return samuraiCounter;
	}
}
