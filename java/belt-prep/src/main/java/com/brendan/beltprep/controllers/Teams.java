package com.brendan.beltprep.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.brendan.beltprep.models.Team;
import com.brendan.beltprep.models.User;
import com.brendan.beltprep.services.TeamService;
import com.brendan.beltprep.services.UserService;

@Controller
public class Teams {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private TeamService teamService;

	@RequestMapping("/createTeam")
	public String index(@ModelAttribute("team") Team team, Model model, HttpSession session) {
		 // get user from session, save them in the model and return the home page
    	Long id = (Long) session.getAttribute("userId");

    	if(id != null) {
    		User loggedInUser = userService.findUserById(id);
    		model.addAttribute("user", loggedInUser);
    		model.addAttribute("teams", teamService.allTeams());
    		model.addAttribute("users", userService.allUsers());
    		return "createTeam.jsp";
    	}
    	
    	return "redirect:/login";
	}
	
	@RequestMapping(value="/createTeam", method=RequestMethod.POST)
	public String createTeam(@Valid @ModelAttribute("team") Team team, BindingResult result, Model model, HttpSession session) {
		// get user from session, save them in the model and return the home page
    	Long id = (Long) session.getAttribute("userId");
    	User loggedInUser = userService.findUserById(id);
		
		if(result.hasErrors()) {
    		model.addAttribute("user", loggedInUser);
    		model.addAttribute("teams", teamService.allTeams());
    		model.addAttribute("users", userService.allUsers());
    		return "createTeam.jsp";
		}
		
		team.setCreator(loggedInUser);
		teamService.createTeam(team);
		return "redirect:/createTeam";
	}
	
	@RequestMapping(value="/joinTeam/{id}", method=RequestMethod.POST)
	public String joinTeam(@PathVariable("id") Long teamId, HttpSession session) {
		Long id = (Long) session.getAttribute("userId");
    	User loggedInUser = userService.findUserById(id);
    	
    	Team team = teamService.findTeamById(teamId);
    	
    	loggedInUser.setCurrentTeam(team);
    	userService.updateUser(loggedInUser);

    	return "redirect:/createTeam";
	}
	
	@RequestMapping(value="/addTeam/{id}", method=RequestMethod.POST)
	public String addTeam(@PathVariable("id") Long teamId, @RequestParam("userId") long userId) {
		User user = userService.findUserById(userId);
		Team team = teamService.findTeamById(teamId);
		
		user.setCurrentTeam(team);
		userService.updateUser(user);
		return "redirect:/createTeam";
	}
}
