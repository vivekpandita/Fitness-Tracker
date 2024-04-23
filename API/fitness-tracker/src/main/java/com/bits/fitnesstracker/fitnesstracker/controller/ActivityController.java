package com.bits.fitnesstracker.fitnesstracker.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bits.fitnesstracker.fitnesstracker.db.ActivityRepository;
import com.bits.fitnesstracker.fitnesstracker.model.Activity;

@RestController
@RequestMapping("/activity")
public class ActivityController {
	@Autowired
	private ActivityRepository activityRepository;

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Activity getUIMetadata(@PathVariable(name = "id") Long id) {
		return activityRepository.getActivityById(id);
	}

	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public Activity reloadAllBundles(@RequestBody(required = false) Activity body) {
		return activityRepository.save(body);
	}

	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public List<Activity> list() {
		return activityRepository.findAll();
	}
}
