package com.bits.fitnesstracker.fitnesstracker.db;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bits.fitnesstracker.fitnesstracker.model.Activity;

public interface ActivityRepository extends JpaRepository<Activity, Long> {
	Activity getActivityById(Long id);

	@Query(value = "select a.* from activity a where a.start_date>= :timestamp", nativeQuery = true)
	List<Activity> findByStartDate(@Param("timestamp") String timestamp);

}
