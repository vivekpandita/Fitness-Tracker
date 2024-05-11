package com.bits.fitnesstracker.fitnesstracker.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

/**
 * @author vivek
 *
 */
@Entity
public class GoalSetting {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE) // Ensure unique identifier for GoalSetting
	private Long id;

    @JsonBackReference
	@ManyToOne
	@JoinColumn(name = "goal_Id")
	private Goal goal;
	private String goalKey;
	private Long goalValue;
	private String goalUnit;
	private Long durationValue;
	private String durationUnit;

	public Goal getGoal() {
		return goal;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setGoal(Goal goal) {
		this.goal = goal;
	}

	public String getGoalKey() {
		return goalKey;
	}

	public void setGoalKey(String goalKey) {
		this.goalKey = goalKey;
	}

	public Long getGoalValue() {
		return goalValue;
	}

	public void setGoalValue(Long goalValue) {
		this.goalValue = goalValue;
	}

	public String getGoalUnit() {
		return goalUnit;
	}

	public void setGoalUnit(String goalUnit) {
		this.goalUnit = goalUnit;
	}

	public Long getDurationValue() {
		return durationValue;
	}

	public void setDurationValue(Long durationValue) {
		this.durationValue = durationValue;
	}

	public String getDurationUnit() {
		return durationUnit;
	}

	public void setDurationUnit(String durationUnit) {
		this.durationUnit = durationUnit;
	}

}
