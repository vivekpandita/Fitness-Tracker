package com.bits.fitnesstracker.fitnesstracker.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Activity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Long userId;
	private String title;
	private Long activityTypeId;
	private Date startDate;
	private Long distance;
	private Long duration;
	private Long intensity;
	private Long calories;
	private Long steps;
	private String additionalNotes;

	public Activity() {
	}

	public Activity(Long id, Long userId, String title, Long activityTypeId, Date startDate, Long distance,
			Long duration, Long intensity, Long calories, Long steps, String additionalNotes) {
		super();
		this.id = id;
		this.userId = userId;
		this.title = title;
		this.activityTypeId = activityTypeId;
		this.startDate = startDate;
		this.distance = distance;
		this.duration = duration;
		this.intensity = intensity;
		this.calories = calories;
		this.steps = steps;
		this.additionalNotes = additionalNotes;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Long getActivityTypeId() {
		return activityTypeId;
	}

	public void setActivityTypeId(Long activityTypeId) {
		this.activityTypeId = activityTypeId;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Long getDistance() {
		return distance;
	}

	public void setDistance(Long distance) {
		this.distance = distance;
	}

	public Long getDuration() {
		return duration;
	}

	public void setDuration(Long duration) {
		this.duration = duration;
	}

	public Long getIntensity() {
		return intensity;
	}

	public void setIntensity(Long intensity) {
		this.intensity = intensity;
	}

	public Long getCalories() {
		return calories;
	}

	public void setCalories(Long calories) {
		this.calories = calories;
	}

	public Long getSteps() {
		return steps;
	}

	public void setSteps(Long steps) {
		this.steps = steps;
	}

	public String getAdditionalNotes() {
		return additionalNotes;
	}

	public void setAdditionalNotes(String additionalNotes) {
		this.additionalNotes = additionalNotes;
	}

	@Override
	public String toString() {
		return "ActivityItem [id=" + id + ", userId=" + userId + ", title=" + title + ", activityTypeId="
				+ activityTypeId + ", startDate=" + startDate + ", distance=" + distance + ", duration=" + duration
				+ ", intensity=" + intensity + ", calories=" + calories + ", steps=" + steps + ", additionalNotes="
				+ additionalNotes + "]";
	}

}
