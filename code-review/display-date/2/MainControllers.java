package com.eric.displayOne.controllers;

import java.util.Date;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.ui.Model;

@Controller
public class MainControllers {
	@RequestMapping("/")
	public String index(Model model) {
		return "index.jsp";
	}
	
	@RequestMapping("/date")
	public String displayDate(Model model) {
		Date date = new java.util.Date();
		model.addAttribute(date);
		return "datedisplay.jsp";
	}
	
	@RequestMapping("/time")
	public String displayTime(Model model) {
		Date date = new java.util.Date();
		model.addAttribute(date);
		return "timedisplay.jsp";
	}
	
}
