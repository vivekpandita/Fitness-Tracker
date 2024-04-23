package com.bits.fitnesstracker.fitnesstracker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bits.fitnesstracker.fitnesstracker.db.ActivityRepository;

@RestController
@RequestMapping("/activity")
public class ActivityController {
	@Autowired
	private ActivityRepository activityRepository;
}
