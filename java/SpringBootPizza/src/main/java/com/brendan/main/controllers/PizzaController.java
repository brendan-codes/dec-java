package com.brendan.main.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PizzaController {

	@RequestMapping("/otherIndex")
	public String index() {
		return "<h1>Hello world!</h1>";
	}
	
}
