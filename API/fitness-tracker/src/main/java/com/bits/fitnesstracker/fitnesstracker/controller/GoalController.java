package com.bits.fitnesstracker.fitnesstracker.controller;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bits.fitnesstracker.fitnesstracker.db.GoalRepository;
import com.bits.fitnesstracker.fitnesstracker.db.GoalSettingRepository;
import com.bits.fitnesstracker.fitnesstracker.db.GoalTypeRepository;
import com.bits.fitnesstracker.fitnesstracker.model.Goal;
import com.bits.fitnesstracker.fitnesstracker.model.GoalSetting;

@RestController
@RequestMapping("/goal")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class GoalController {
	@Autowired
	private GoalRepository goalRepository;

	@Autowired
	private GoalSettingRepository goalSettingRepository;

	@Autowired
	private GoalTypeRepository goalTypeRepository;

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Goal getGoalById(@PathVariable(name = "id") Long id) {
		return goalRepository.getGoalById(id);
	}

	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public Goal save(@RequestBody(required = false) Goal body) {
		if (body.getGoalType() == null && body.getGoalTypeID() != null) {
			body.setGoalType(goalTypeRepository.getGoalTypeById(body.getGoalTypeID()));
		}
		Set<GoalSetting> gs = body.getGoalSetting();
		Goal g = goalRepository.save(body);
//		gs = gs.stream().map(g1 -> {
//			g1.setGoal(g);
//			return goalSettingRepository.save(g1);
//		}).collect(Collectors.toSet());
//		g.setGoalSetting(gs);
		return g;
	}

	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public List<Goal> list() {
		return goalRepository.findAll();
	}
}
