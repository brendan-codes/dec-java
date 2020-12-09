package com.objectmaster.humans;

public class Samurai extends Human {
	
	private static int counter;
	
	public Samurai() {
		counter++;
	}
	
	int health = 200;
	
	public int deathBlow(Human human) {
		human.health = 0;
		health -= (health/2);
		System.out.println("You killed " + human.getClass().getSimpleName() + ". Your health is now " + health);
		return health;
	}
	
	public int meditate() {
		int yourHealth = health/2;
		health += (health/2);
		System.out.println("You just meditated and got " + yourHealth +" back!");
		return health;
	}
	
	public int howMany() {
		System.out.println("There are " + counter + " Samurai on the board!");
		return counter;
	}
	

}
