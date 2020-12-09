package com.objectmaster.humans;

public class Wizard extends Human{

	int health = 50;
	int intelligence = 8;
	
	public int heal(Human human) {
		human.health += intelligence;
		System.out.println("You healed " + human.getClass().getSimpleName() + " back to " + health);
		return health;
	}
	
	public int fireball(Human human) {
		human.health -= (intelligence * 3);
		System.out.println("You casted fire onto " + human.getClass().getSimpleName().toString() + " for 24 damage");
		return health;
	}
	
}
