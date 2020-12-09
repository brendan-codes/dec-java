package com.objectmaster.humans;

public class Human {

	int strength = 3;
	int stealth = 3;
	int intelligence = 3;
	int health = 100;
	
	public int attack(Human human) {
		health -= strength;
		System.out.println("This character's health is now: " + health);
		return health;
	}
	
}
