package com.brendan;

import java.util.ArrayList;

public class Tester {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Person person1 = new Person("Brendan", 21, "Code all day!", 5.11);
		
		person1.readStats();
		
		
		Ninja ninja1 = new Ninja("Nina", 32, "Strike!", (float) 5.11);
		Ninja ninja2 = new Ninja("Dave", 33, "I like code too!!", (float) 7.2);
		
		
		ninja1.strike(person1);
		ninja1.strike(ninja2);
		
		ninja2.readStats();
		
		ArrayList<String> example = new ArrayList<String>();
		
	}

}
