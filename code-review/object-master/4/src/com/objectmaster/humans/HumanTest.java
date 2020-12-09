package com.objectmaster.humans;

public class HumanTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Human bob = new Human();
		Human alice = new Human();
		
		bob.attack(alice);
		alice.attack(bob);
		
		Wizard kanye = new Wizard();
		Ninja west = new Ninja();
		Samurai taylor = new Samurai();
		Samurai swift = new Samurai();
		Samurai beyonce = new Samurai();
		
		kanye.fireball(alice);
		kanye.heal(bob);
		
		beyonce.howMany();
		
		taylor.deathBlow(kanye);
		beyonce.meditate();
		
		west.steal(beyonce);
		kanye.fireball(beyonce);
		beyonce.meditate();
		
		
	}

}
