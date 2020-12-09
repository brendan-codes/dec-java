package com.objectmaster.humans;

public class Ninja extends Human{

	int stealth = 10;
	
	public int steal(Human human) {
		human.health -= stealth;
		health += stealth;
		System.out.println("You stole " + stealth + " health from " + human.getClass().getSimpleName());
		return health;
	}
	
	public int runAway() {
		health -= 10;
		System.out.println("You ran away!");
		return health;
	}
	
}
