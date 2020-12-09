public class Samurai extends Human{
	private static int numberOfSamurais;
	

	public Samurai(){
		setHealth(200);
		numberOfSamurais++;
	}
	public void deathblow(Human enemy) {
		setHealth(getHealth()/2);
		enemy.setHealth(0);
	}
	public void meditate() {
		setHealth(getHealth()+(getHealth()/2));
	}
	public int getNumberOfSamurais() { 
		return numberOfSamurais;	
	}
}
