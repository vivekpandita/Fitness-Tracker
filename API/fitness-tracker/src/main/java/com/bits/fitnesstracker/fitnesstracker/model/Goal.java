package com.bits.fitnesstracker.fitnesstracker.model;

import java.util.Set;

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

/**
 * @author vivek
 *
 */
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

	// Below are transient temporary code fields for single goal setting

	@Transient
	private Long goalValue;

	@Transient
	private String goalUnit;

	@Transient
	private Long durationValue;

	@Transient
	private String durationUnit;

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

	public Long getGoalValue() {
		return goalValue != null ? goalValue : (getFirstSetValue().getGoalValue());
	}

	public void setGoalValue(Long goalValue) {
		this.goalValue = goalValue;
	}

	public String getGoalUnit() {
		return goalUnit != null ? goalUnit : (getFirstSetValue().getGoalUnit());
	}

	public void setGoalUnit(String goalUnit) {
		this.goalUnit = goalUnit;
	}

	public Long getDurationValue() {
		return durationValue != null ? durationValue : (getFirstSetValue().getDurationValue());
	}

	public void setDurationValue(Long durationValue) {
		this.durationValue = durationValue;
	}

	public String getDurationUnit() {
		return durationUnit != null ? durationUnit : (getFirstSetValue().getDurationUnit());
	}

	public void setDurationUnit(String durationUnit) {
		this.durationUnit = durationUnit;
	}

	private GoalSetting getFirstSetValue() {
		GoalSetting first = new GoalSetting();
		if (goalSetting != null) {
			int i = 0;
			for (GoalSetting s : goalSetting) {
				if (i == 0) {
					first = s;
					break;
				}
				i++;
			}
		}

		return first;

	}

}
