package com.bits.fitnesstracker.fitnesstracker.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bits.fitnesstracker.fitnesstracker.db.ActivityTypeRepository;
import com.bits.fitnesstracker.fitnesstracker.model.ActivityType;

@RestController
@RequestMapping("/activityType")
public class ActivityTypeController {
	@Autowired
	private ActivityTypeRepository activityTypeRepository;

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ActivityType getUIMetadata(@PathVariable(name = "id") Long id) {
		return activityTypeRepository.getActivityTypeById(id);
	}

	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public ActivityType reloadAllBundles(@RequestBody(required = false) ActivityType body) {
		return activityTypeRepository.save(body);
	}

	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public List<ActivityType> list() {
		return activityTypeRepository.findAll();
	}
}