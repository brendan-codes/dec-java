package com.codingdojo.objectmaster;

public class Ninja extends Human {
	public Ninja() {
		this.setStealth(10);
	}
	public void steal(Human human) {
		human.setHealth(human.getHealth() - getStealth());
		setHealth(getHealth()+getStealth());	
	}
	public void runAway() {
		setHealth(getHealth() - 10);
	}
	
}
