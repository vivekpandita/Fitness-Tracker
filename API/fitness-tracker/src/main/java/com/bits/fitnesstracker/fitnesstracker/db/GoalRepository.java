package com.bits.fitnesstracker.fitnesstracker.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bits.fitnesstracker.fitnesstracker.model.Goal;

/**
 * @author vivek
 *
 */
public interface GoalRepository extends JpaRepository<Goal, Long> {
	Goal getGoalById(Long id);
}
