package com.bits.fitnesstracker.fitnesstracker.model;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Transient;

@Entity
public class Goal {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Long id;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "goalTypeId", referencedColumnName = "id")
	private GoalType goalType;

	@Transient
	private Long goalTypeID;

	private Long userId;

	@JsonManagedReference
	@OneToMany(mappedBy = "goal", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
	private Set<GoalSetting> goalSetting;

	public Goal() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public GoalType getGoalType() {
		return goalType;
	}

	public void setGoalType(GoalType goalType) {
		this.goalType = goalType;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Set<GoalSetting> getGoalSetting() {
		return goalSetting;
	}

	public void setGoalSetting(Set<GoalSetting> goalSetting) {
		this.goalSetting = goalSetting;
	}

	public Long getGoalTypeID() {
		return goalTypeID != null ? goalTypeID : (goalType != null ? goalType.getId() : null);
	}

	public void setGoalTypeID(Long goalTypeID) {
		this.goalTypeID = goalTypeID;
	}

}
