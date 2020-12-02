package com.brendan;

public class Ninja extends Person {
	
	private int strength;

	public Ninja(String n, int a, String s, float h) {
		super(n, a, s, h);
		this.setStrength(10);
		// TODO Auto-generated constructor stub
	}
	
	public void strike(Person person) {
		person.setAge(person.getAge() - 1);
	}

	public Ninja() {
		// TODO Auto-generated constructor stub
	}

	public int getStrength() {
		return strength;
	}

	public void setStrength(int strength) {
		this.strength = strength;
	}
	

}
