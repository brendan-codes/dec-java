package com.codingdojo.brendan;
import java.nio.charset.StandardCharsets;
import java.util.Random;

public class SuperStringMaster5000 {
	
	private static char[] letters = {
			'a','b','c'
	};
	
	public static String RandomString(int numberChars) {
		String output = "";
		Random random = new Random();
		
		for(int i = 0; i < numberChars; i++) {
			
			int randomChar = random.nextInt(letters.length);
			output += letters[randomChar];
		}
		
		return output;
	}

}
