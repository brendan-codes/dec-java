package com;

public class Bat extends Mammal{
	
	public Bat() {
		this.energyLevel = 300;
	}
	
	public void fly() {
		System.out.println("the bat flys off and lost 50 energy");
		this.energyLevel -= 50;
	}
	
	public void eatHumans() {
		System.out.println("the bat eats a human and gained 25 energy");
		this.energyLevel += 50;
	}
	
	public void attackTown() {
		System.out.println("the bat attacks your town and lost 100 energy");
		this.energyLevel -= 100;
	}
	
}
