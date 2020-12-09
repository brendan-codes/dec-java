package com.nathalie.displaydate.controllers;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class DateController {
	
	@RequestMapping("/")
		public String index() {
		return "index.jsp";
	}
	
	@RequestMapping("/date")
		public String date(Model model) {
			Date date = new Date();
			
			SimpleDateFormat dateformat = new SimpleDateFormat("EEE MMM d ZZZ yyyy");
			String todaysDate = dateformat.format(date);
			
			model.addAttribute("date", todaysDate);
			return "date.jsp";
	}
	
	@RequestMapping ("/time")
		public String  time (Model model) {
		Date timeDate = new Date();
		
		SimpleDateFormat timeFormat = new SimpleDateFormat ("HH:mm:ss");
		String todaysTime = timeFormat.format(timeDate);
		model.addAttribute("time", todaysTime);
		return "time.jsp";
		
		}
}
