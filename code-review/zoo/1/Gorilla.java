package com;

public class Gorilla extends Mammal{

	public void throwSomething() {
		
		System.out.println("the gorilla threw something");
		this.energyLevel -= 5;
	}
	
	public void eatBananas() {
		System.out.println("the gorilla ate mad bananas");
		this.energyLevel += 10;
	}
	
	public void climb() {
		System.out.println("the gorilla climbed up the vines");
		this.energyLevel -= 10;
	}
}
