package com.bits.fitnesstracker.fitnesstracker.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bits.fitnesstracker.fitnesstracker.model.GoalType;

public interface GoalTypeRepository extends JpaRepository<GoalType, Long> {
	GoalType getGoalTypeById(Long id);
}
