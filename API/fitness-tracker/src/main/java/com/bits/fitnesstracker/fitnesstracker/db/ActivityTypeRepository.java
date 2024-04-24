package com.bits.fitnesstracker.fitnesstracker.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bits.fitnesstracker.fitnesstracker.model.ActivityType;

public interface ActivityTypeRepository extends JpaRepository<ActivityType, Long> {
	ActivityType getActivityTypeById(Long id);
}