package com.brendan.main.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.brendan.main.services.DojoService;
import com.brendan.main.services.NinjaService;

@Controller
public class MainController {
	
	@Autowired
	private DojoService dojoService;
	
	@Autowired
	private NinjaService ninjaService;
	
	@RequestMapping("/")
	public String allDojos(Model model) {
		System.out.println("Hello world!");
		model.addAttribute("dojos", dojoService.allDojos());
		return "/dojos.jsp";
	}

}
