package com.codingdojo;

public class Mammal {
	private int energyLevel;
	public Mammal(int energyLevel) {
		this.setEnergyLevel(energyLevel);
	}
	public void setEnergyLevel(int energyLevel) {
		this.energyLevel = energyLevel;
		
	}
	public String displayEnergy(){
		System.out.println("energy level: " + this.energyLevel);
		return "energy level: " + this.energyLevel; 
	}
	public int getEnergyLevel() {
		return energyLevel;
	}
	
}
