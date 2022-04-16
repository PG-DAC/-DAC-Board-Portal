package in.edac.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.edac.model.Schedule;

public interface ScheduleRepository extends JpaRepository<Schedule, Long>{

}
