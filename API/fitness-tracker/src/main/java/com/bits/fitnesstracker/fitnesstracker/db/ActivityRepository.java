package com.bits.fitnesstracker.fitnesstracker.db;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bits.fitnesstracker.fitnesstracker.model.Activity;

public interface ActivityRepository extends JpaRepository<Activity, Long> {
//	List<Activity> getAllActivities();
    Activity getActivityById(Long id);
//    Activity saveActivity(Activity Activity);
//    void deleteActivity(Long id);
}
