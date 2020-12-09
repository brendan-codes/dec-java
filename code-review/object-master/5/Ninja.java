
public class Ninja extends Human{
	public Ninja() {
		this.setStealth(10);
	}
	
	
	public void steal(Human target) {
		target.setHealth(target.getHealth() - 10);
		this.setHealth(this.getHealth() + 10);
	}
	
	
	public void runAway() {
		this.setHealth(this.getHealth() - 10);
	}
}
