package com.brendan;

import com.brendan.classes.Circle;
import com.brendan.classes.Dot;
import com.brendan.classes.Line;
import com.brendan.classes.Rectangle;
import com.brendan.classes.SuperTriangle;


public class Tester {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Dot example = new Dot();
		example.sayName();
		
		Line example2 = new Line();
		example2.sayName();
		
		Circle example3 = new Circle(1, 1, 6);
		example3.sayName();
		System.out.println(example3.getArea());
		
		Rectangle example4 = new Rectangle(2, 4);
		example4.sayName();
		System.out.println(example4.getArea());
		
		SuperTriangle example5 = new SuperTriangle();
//		example5.
		
		
		try {
			String[] words = new String[-1];
		} catch (NegativeArraySizeException error) {
			System.out.println("catastrophic error: delete computer or weep");
			System.out.println(error);
		}
		
	}

}
