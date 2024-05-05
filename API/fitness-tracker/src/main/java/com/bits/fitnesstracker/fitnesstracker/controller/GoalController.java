package com.bits.fitnesstracker.fitnesstracker.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bits.fitnesstracker.fitnesstracker.db.GoalRepository;
import com.bits.fitnesstracker.fitnesstracker.model.Goal;

@RestController
@RequestMapping("/goal")
public class GoalController {
	@Autowired
	private GoalRepository goalRepository;

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Goal getGoalById(@PathVariable(name = "id") Long id) {
		return goalRepository.getGoalById(id);
	}

	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public Goal save(@RequestBody(required = false) Goal body) {
		return goalRepository.save(body);
	}

	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public List<Goal> list() {
		return goalRepository.findAll();
	}
}
