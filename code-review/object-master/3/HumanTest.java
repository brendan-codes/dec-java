package com.codingdojo.objectmaster;

public class HumanTest {
	public static void main(String[] args) {
		Human human1 = new Human();
		Human human2 = new Human();
		human1.getStrength();
		human2.attack(human1);
		human1.getHealth();
		
		Samurai samurai1 = new Samurai();
		Wizard wizard1 = new Wizard();
		Ninja ninja1 = new Ninja();
		
		samurai1.howMany();
		
		wizard1.fireball(samurai1);
		
		ninja1.steal(samurai1);
		samurai1.getHealth();
	}
}
