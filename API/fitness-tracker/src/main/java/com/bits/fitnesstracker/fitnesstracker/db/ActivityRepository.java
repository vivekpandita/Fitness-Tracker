package com.bits.fitnesstracker.fitnesstracker.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bits.fitnesstracker.fitnesstracker.model.Activity;

public interface ActivityRepository extends JpaRepository<Activity, Long> {
	
}
