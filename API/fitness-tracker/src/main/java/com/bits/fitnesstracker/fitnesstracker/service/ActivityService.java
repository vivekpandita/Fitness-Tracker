package com.bits.fitnesstracker.fitnesstracker.service;

import java.util.List;

import com.bits.fitnesstracker.fitnesstracker.model.Activity;

public interface ActivityService {
    List<Activity> getAllActivities();
    Activity getActivityById(Long id);
    Activity saveActivity(Activity Activity);
    void deleteActivity(Long id);
}
