package com.codingdojo;

public class Gorilla extends Mammal {
	public Gorilla(int energyLevel) {
		super(energyLevel);
		this.setEnergyLevel(100);
	}
	public void throwSomething(){
		setEnergyLevel(getEnergyLevel()-5);
		System.out.println("the gorilla threw something. energy down by 5; energy level now at " + getEnergyLevel());
		
	}
	public void eatBananas() {
		setEnergyLevel(getEnergyLevel()+10);
		System.out.println("the gorilla ate a banana; energy level now at " + getEnergyLevel());
	}
	public void climb() {
		setEnergyLevel(getEnergyLevel()-10);
		System.out.println("climbed; energy level now at " + getEnergyLevel());
		
	}
}
