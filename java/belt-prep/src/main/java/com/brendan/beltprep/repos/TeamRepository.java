package com.brendan.beltprep.repos;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.brendan.beltprep.models.Team;

public interface TeamRepository extends CrudRepository<Team, Long> {
	List<Team> findAll();
}
