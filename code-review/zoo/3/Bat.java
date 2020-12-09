package com.codingdojo;

public class Bat extends Mammal {
	public Bat(int energyLevel) {
		super(energyLevel);
		this.setEnergyLevel(300);
	}
	public void fly() {
		setEnergyLevel(getEnergyLevel() - 50);
		System.out.println("flt flt flt");
	}
	public void eatHumans(){
		setEnergyLevel(getEnergyLevel() + 100);
		System.out.println("ate human. energy level up by " + getEnergyLevel());
	}
	public void attackTown() {
		setEnergyLevel(getEnergyLevel()-100);
		System.out.println("fire!! fire!!");
		
	}
}
