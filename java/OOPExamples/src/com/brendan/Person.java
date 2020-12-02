package com.brendan;

public class Person {

	// member variables
	private String name;
	private int age;
	private String saying;
	private float height;
	
	
	// constructors
	public Person(String n, int a, String s, float h) {
		this.setName(n);
		this.setAge(a);
		this.setSaying(s);
		this.setHeight(h);
	}
	
	// overloaded function for casting doubles to floats
	public Person(String n, int a, String s, double h) {
		this.setName(n);
		this.setAge(a);
		this.setSaying(s);
		this.setHeight((float) h);
	}
	
	public Person() {
		
	}
	
	// public methods
	public void readStats() {
		System.out.println("Hi my name is " + this.getName() + " and I am " + this.getAge());
		System.out.println(this.getSaying());
		System.out.println("and I am " + this.getHeight() + " tall!");
	}


	
	// getters and setters
	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public int getAge() {
		return age;
	}


	public void setAge(int age) {
		this.age = age;
	}


	public String getSaying() {
		return saying;
	}


	public void setSaying(String saying) {
		this.saying = saying;
	}


	public float getHeight() {
		return height;
	}


	public void setHeight(float height) {
		this.height = height;
	}
	
	
	
}

