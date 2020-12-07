package com.brendan.main.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OtherController {

	
	@RequestMapping("/index")
	public String index() {
		return "<h2>This is also a hello world!</h2>";
	}
	
	@RequestMapping("/pizza")
	public String pizza() {
		return "<h2>This is a pizza party!</h2>";
	}
	
	public String returnWords() {
		return "Words";
	}
}
