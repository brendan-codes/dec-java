package com.brendan.main.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {

	@GetMapping("/")
	public String index() {
		return "index.jsp";
	}
	
	@GetMapping("/user/{id}")
	public String getUser(@PathVariable String id, Model model) {
		System.out.println(id);
		model.addAttribute("id", id.toString());
		model.addAttribute("exampleString", "<h1><script>alert('you are super hacked!')</script>Hello World!</h1>");
		return "results.jsp";
	}
	
	
	@PostMapping("/process")
//	@RequestMapping(path="/process", method=RequestMethod.POST) // alternate annotation
	public String processUser(@RequestParam(value="name") String name,
							  @RequestParam(value="password") String password,
							  Model model) {
		
		System.out.println(name);
		System.out.println(password);
		
		if(name.equals("Brendan")) {
			
		}
		
		
		return "redirect:/";
	}
}
