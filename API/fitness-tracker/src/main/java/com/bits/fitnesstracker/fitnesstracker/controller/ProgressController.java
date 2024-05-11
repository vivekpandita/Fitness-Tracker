package com.bits.fitnesstracker.fitnesstracker.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bits.fitnesstracker.fitnesstracker.db.ActivityRepository;
import com.bits.fitnesstracker.fitnesstracker.model.Activity;

@RestController
@RequestMapping("/progress")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProgressController {

	private static final String TOTAL_DURATION = "totalDuration";

	private static final String TOTAL_STEPS = "totalSteps";

	private static final String TOTAL_DISTANCE = "totalDistance";

	private static final String TOTAL_CALORIES = "totalCalories";

	@Autowired
	private ActivityRepository activityRepository;

	@RequestMapping(value = "/user/{userId}", method = RequestMethod.GET)
	public Map<String, Long> getProgressForUser(@PathVariable(name = "userId") Long id) {
		Map<String, Long> response = new HashMap<>();
		response.put(TOTAL_CALORIES, 0l);
		response.put(TOTAL_DISTANCE, 0l);
		response.put(TOTAL_STEPS, 0l);
		response.put(TOTAL_DURATION, 0l);
		List<Activity> list = activityRepository.findAll();
		list.stream().filter(act -> {
			if (id > 0) {
				return act.getUserId() == id;
			} else {
				return true;
			}

		}).forEach(act -> {
			if (act.getCalories() != null && act.getCalories() > 0) {
				response.put(TOTAL_CALORIES, response.get(TOTAL_CALORIES) + act.getCalories());
			}

			if (act.getDistance() != null && act.getDistance() > 0) {
				response.put(TOTAL_DISTANCE, response.get(TOTAL_DISTANCE) + act.getDistance());
			}

			if (act.getSteps() != null && act.getSteps() > 0) {
				response.put(TOTAL_STEPS, response.get(TOTAL_STEPS) + act.getSteps());
			}

			if (act.getDuration() != null && act.getDuration() > 0) {
				response.put(TOTAL_DURATION, response.get(TOTAL_DURATION) + act.getDuration());
			}
		});
		return response;
	}
}
