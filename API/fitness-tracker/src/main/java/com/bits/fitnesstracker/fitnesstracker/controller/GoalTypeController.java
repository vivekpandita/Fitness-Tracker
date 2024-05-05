package com.bits.fitnesstracker.fitnesstracker.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bits.fitnesstracker.fitnesstracker.db.GoalTypeRepository;
import com.bits.fitnesstracker.fitnesstracker.model.GoalType;

@RestController
@RequestMapping("/goalType")
public class GoalTypeController {
	@Autowired
	private GoalTypeRepository goalTypeRepository;

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public GoalType getActivityTypeById(@PathVariable(name = "id") Long id) {
		return goalTypeRepository.getGoalTypeById(id);
	}

	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public GoalType save(@RequestBody(required = false) GoalType body) {
		return goalTypeRepository.save(body);
	}

	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public List<GoalType> list() {
		return goalTypeRepository.findAll();
	}
}
