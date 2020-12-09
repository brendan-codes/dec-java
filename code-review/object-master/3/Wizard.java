package com.codingdojo.objectmaster;

public class Wizard extends Human{
	public Wizard() {
		this.setHealth(50);
		this.setIntelligence(8);
		
	}
	public void heal(Human human) {
		human.setHealth(human.getHealth()+getIntelligence());
		System.out.println("healed.. " + "attacked guy's health is " + human.getHealth());
	}
	public void fireball(Human human) {
		human.setHealth(human.getHealth()-(3*getIntelligence()));
		System.out.println("attacked guy's health is " + human.getHealth());
	}
}
