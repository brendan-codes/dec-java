package com.codingdojo.brendan;

public class Puzzling {

	public String[] randomStringArr() {
		String[] arr = new String[10];
		
		for(int i = 0; i < arr.length; i++) {
			arr[i] = SuperStringMaster5000.RandomString(5);
		}
		
		return arr;
	}
}
