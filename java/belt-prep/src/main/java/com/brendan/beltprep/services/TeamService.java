package com.brendan.beltprep.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brendan.beltprep.models.Team;
import com.brendan.beltprep.repos.TeamRepository;

@Service
public class TeamService {
	
	@Autowired
	private TeamRepository teamRepository;

	public List<Team> allTeams(){
		
		return teamRepository.findAll();
	}
	
	public Team createTeam(Team t) {
		return teamRepository.save(t);
	}
	
	public Team updateTeam(Team t) {
		return teamRepository.save(t);
	}
	
	
    public Team findTeamById(Long id) {
    	Optional<Team> t = teamRepository.findById(id);
    	
    	if(t.isPresent()) {
            return t.get();
    	} else {
    	    return null;
    	}
    }
   
}
