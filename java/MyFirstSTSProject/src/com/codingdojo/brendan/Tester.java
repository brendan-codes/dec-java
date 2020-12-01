package com.codingdojo.brendan;

import java.util.ArrayList;
import java.util.Arrays;

public class Tester {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		System.out.println("Hello again!");
		
		Rectangle rect = new Rectangle(6, 7);

		
		
		ArrayList<String> items = new ArrayList<String>();
		
		System.out.println(SuperStringMaster5000.RandomString(7));
		
		Puzzling puzzlingInstance = new Puzzling();
		String[] randomWords = puzzlingInstance.randomStringArr();
		
		System.out.println(randomWords);
		
		for(String word : randomWords) {
			System.out.println(word);
		}
		
		System.out.println(Arrays.toString(randomWords));
	}

}
