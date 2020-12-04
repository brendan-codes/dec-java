package com.brendan.classes;

public class Circle extends Thing implements AreaInterface {
	
	private int x;
	private int y;
	private int radius;
	
	public Circle(int x, int y, int r) {
		this.setX(x);
		this.setY(y);
		this.setRadius(r);
	}

	@Override
	public void sayName() {
		// TODO Auto-generated method stub
		System.out.println(this.getClass().getSimpleName());
	}

	@Override
	public double getArea() {
		// TODO Auto-generated method stub
		return (this.getRadius() * this.getRadius()) * Math.PI;
	}

	public int getX() {
		return x;
	}

	public void setX(int x) {
		this.x = x;
	}

	public int getY() {
		return y;
	}

	public void setY(int y) {
		this.y = y;
	}

	public int getRadius() {
		return radius;
	}

	public void setRadius(int radius) {
		this.radius = radius;
	}
	
	
	
	
	

}
