package com.bits.fitnesstracker.fitnesstracker.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

/**
 * @author vivek
 *
 */
@Entity
public class GoalType {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Long id;
	private String abbreviation;
	private String description;

	public GoalType() {
	}

	public GoalType(Long id, String abbreviation, String description) {
		super();
		this.id = id;
		this.abbreviation = abbreviation;
		this.description = description;
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

	@Override
	public String toString() {
		return "GoalType [id=" + id + ", abbreviation=" + abbreviation + ", description=" + description + "]";
	}

}
