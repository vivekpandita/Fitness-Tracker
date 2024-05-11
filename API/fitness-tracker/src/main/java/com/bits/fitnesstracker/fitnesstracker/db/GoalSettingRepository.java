package com.bits.fitnesstracker.fitnesstracker.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bits.fitnesstracker.fitnesstracker.model.GoalSetting;

public interface GoalSettingRepository extends JpaRepository<GoalSetting, Long> {
}
