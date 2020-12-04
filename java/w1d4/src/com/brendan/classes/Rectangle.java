package com.brendan.classes;

public class Rectangle extends Thing implements AreaInterface {
	
	private int height;
	private int width;
	
	public Rectangle(int h, int w) {
		this.setHeight(h);
		this.setWidth(w);
	};

	@Override
	public double getArea() {
		// TODO Auto-generated method stub
		return this.getHeight() * this.getWidth();
	}

	@Override
	public void sayName() {
		// TODO Auto-generated method stub

	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public int getWidth() {
		return width;
	}

	public void setWidth(int width) {
		this.width = width;
	}
	
	

}
