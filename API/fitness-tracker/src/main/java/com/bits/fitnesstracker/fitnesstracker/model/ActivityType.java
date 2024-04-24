package com.bits.fitnesstracker.fitnesstracker.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ActivityType {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String abbreviation;
	private String description;

	public ActivityType() {
	}

	public ActivityType(Long id, String abbreviation, String description) {
		super();
		this.id = id;
		this.abbreviation = abbreviation;
		this.description = description;
	}

	@Override
	public String toString() {
		return "ActivityType [id=" + id + ", abbreviation=" + abbreviation + ", description=" + description + "]";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAbbreviation() {
		return abbreviation;
	}

	public void setAbbreviation(String abbreviation) {
		this.abbreviation = abbreviation;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
