
public class Human {
	private int strength;
	private int intelligence;
	private int stealth;
	private int health;
	
	
	public Human() {
		strength = 3;
		intelligence = 3;
		stealth = 3;
		health = 100;
	}
	
	
	public int getStrength() {
		return strength;
	}
	
	
	public int getIntelligence() {
		return intelligence;
	}
	
	
	public int getStealth() {
		return stealth;
	}
	
	
	public int getHealth() {
		return health;
	}
	
	
	public void setStrength(int strength) {
		this.strength = strength;
	}
	
	
	public void setIntelligence(int intelligence) {
		this.intelligence = intelligence;
	}
	
	
	public void setStealth(int stealth) {
		this.intelligence = stealth;
	}
	
	
	public void setHealth(int health) {
		this.health = health;
	}
	
	
	public void attack(Human target) {
		target.setHealth(target.getHealth() - this.strength);
	}
}
