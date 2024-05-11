package com.bits.fitnesstracker.fitnesstracker.controller;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bits.fitnesstracker.fitnesstracker.db.ActivityRepository;
import com.bits.fitnesstracker.fitnesstracker.db.ActivityTypeRepository;
import com.bits.fitnesstracker.fitnesstracker.model.Activity;

@RestController
@RequestMapping("/activity")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ActivityController {
	@Autowired
	private ActivityRepository activityRepository;

	@Autowired
	private ActivityTypeRepository activityTypeRepository;

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Activity getActivityById(@PathVariable(name = "id") Long id) {
		return activityRepository.getActivityById(id);
	}

	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public Activity save(@RequestBody(required = false) Activity body) {
		if (body.getActivityType() == null && body.getActivityTypeID() != null) {
			body.setActivityType(activityTypeRepository.getActivityTypeById(body.getActivityTypeID()));
		}
		if(body.getStartDate() == null)
		{
			body.setStartDate(new Date());
		}
		return activityRepository.save(body);
	}

	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public List<Activity> list() {
		return activityRepository.findAll();
	}

	@RequestMapping(value = "/todaysList", method = RequestMethod.GET)
	public List<Activity> TODAYSlist() {
		Date d = new Date();
		d.setHours(0);
		d.setMinutes(0);
		d.setSeconds(0);
		return activityRepository.findByStartDate(new Timestamp(d.getTime()).toString());
	}
}
