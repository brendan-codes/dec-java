package com.brendan.main.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {
	
	
	@RequestMapping("/")
	public String index() {
		return "Hello world!";
	}
	
	@RequestMapping("/admin")
	public String admin() {
		return "Welcome Admin!";
	}
	
	
	@RequestMapping("/user/help")
	public String getHelp() {
		return "This user needs help!";
	}
	
	

}
