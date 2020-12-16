package com.brendan.main.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.brendan.main.models.Dojo;
import com.brendan.main.models.Ninja;
import com.brendan.main.services.DojoService;
import com.brendan.main.services.NinjaService;

@Controller
public class MainController {
		
	@Autowired
	private DojoService dojoService;
	
	@Autowired
	private NinjaService ninjaService;
	
	@GetMapping("/")
	public String allDojos(Model model) {
		System.out.println("Hello world!");
		model.addAttribute("dojos", dojoService.allDojos());
		return "index.jsp";
	}
	
	@GetMapping("/createDojo")
	public String showDojoCreate(@ModelAttribute("dojo") Dojo dojo) {
		return "newDojo.jsp";
	}
	
	@PostMapping("/createDojo")
	public String createDojo(@Valid @ModelAttribute("dojo") Dojo dojo, BindingResult result) {
		if(result.hasErrors()) {
			return "newDojo.jsp";
		}
		dojoService.save(dojo);
		return "redirect:/";
	}
	
	@GetMapping("/createNinja")
	public String showNinjaCreate(@ModelAttribute("ninja") Ninja ninja, Model model) {
		List<Dojo> myDojos = dojoService.allDojos();		
		
		model.addAttribute("dojos", myDojos);
		return "newNinja.jsp";
	}
	
	@PostMapping("/createNinja")
	public String createNinja(@Valid @ModelAttribute("ninja") Ninja ninja, BindingResult result, RedirectAttributes redirectAttributes) {
		if(result.hasErrors()) {
			return "newNinja.jsp";
		}
		
		if(ninja.getDojo().getNinjas().size() > 3) {
			redirectAttributes.addFlashAttribute("errs", "too many ninjas!");
			return "redirect:/createNinja";
		}

//		Dojo thisDojo = dojoService.findById(dojoId);
//		thisDojo.getNinjas().add(newNinja);
//		dojoService.save(thisDojo);

		ninjaService.save(ninja);
		return "redirect:/";
	}

}
