package com.brendan.classes;

public class SuperTriangle extends Thing implements AreaInterface {
	
	public String publicVariable = "I am public!";
	private String privateVariable = "I am private!";
	protected String protectedVariable = "I am protected!";
	String defaultVariable = "I am default";

	@Override
	public double getArea() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void sayName() {
		// TODO Auto-generated method stub

	}

}
