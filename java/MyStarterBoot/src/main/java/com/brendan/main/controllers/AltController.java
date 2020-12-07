package com.brendan.main.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


public class AltController {

	
	@RequestMapping("/")
	public String doStuff() {
		return "This is do stuff!";
	}
}
