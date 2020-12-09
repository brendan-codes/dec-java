package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.*;
import java.time.*;
import java.time.format.DateTimeFormatter;
import java.text.*;

@Controller
public class HomeController {

	@RequestMapping("")
	public String index() {
		return "index.jsp";
	}
	@RequestMapping("/date")
	public String date(Model model) {
		Date date = new Date();
		SimpleDateFormat ft =
		new SimpleDateFormat("EEEE',' 'the' d 'of' MMMM',' yyyy");
		model.addAttribute("thisDate", ft.format(date));
		return "date.jsp";
	}
	
	@RequestMapping("/time")
	public String time(Model model) {
		LocalDateTime now = LocalDateTime.now();
		DateTimeFormatter dtf =
				DateTimeFormatter.ofPattern("hh:mm:ss a");
		model.addAttribute("thisTime", dtf.format(now));
		return "time.jsp";
	}
	
}
