package com.codingdojo.objectmaster;

public class Samurai extends Human {
	public static int numberOfSamurai = 0;
	public Samurai(){
		this.setHealth(200);
		numberOfSamurai++;
	}
	public void deathBlow(Human human) {
		setHealth(getHealth()/2);
		human.setHealth(0);
	}
	public void meditate() {
		setHealth(200);
	}
	public void howMany() {
		System.out.println("Current # of samurai: " + numberOfSamurai); 
	}
}
