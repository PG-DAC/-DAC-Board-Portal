package in.edac.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import in.edac.exception.RecordingNoFoundException;
import in.edac.model.Recording;
import in.edac.model.Schedule;
import in.edac.repository.ScheduleRepository;

@CrossOrigin(origins ="http://localhost:3000" )
@RestController
@RequestMapping("/b")
public class ScheduleController {
	
	public static final String REDIRECT = "redirect:/";

	@Autowired
	private ScheduleRepository schedulerepository;
	
	@GetMapping("/schedules")
	public List<Schedule> getAllSchedule(){
		return  schedulerepository.findAll();
	}
	@PostMapping("/schedules")
	public String createSchedule(@RequestBody Schedule schedule) {
		schedulerepository.save(schedule);
		return REDIRECT;
	}
	
	
			@GetMapping("/schedules/{id}")
			public ResponseEntity<Schedule> getScheduleById(@PathVariable Long id) {
				Schedule schedule = schedulerepository.findById(id)
						.orElseThrow(() -> new RecordingNoFoundException("Recording not exist with id :" + id));
				return ResponseEntity.ok(schedule);
			}
			
			
			
			@PutMapping("/schedules/{id}")
			public String updateSchedule(@PathVariable Long id, @RequestBody Schedule scheduleDetails){
				Schedule schedule = schedulerepository.findById(id)
						.orElseThrow(() -> new RecordingNoFoundException("Recording not exist with id :" + id));
				
				schedule.setTopicName(scheduleDetails.getTopicName());
				schedule.setDate(scheduleDetails.getDate());
				schedule.setTime(scheduleDetails.getTime());
				schedule.setMeetingId(scheduleDetails.getMeetingId());
				schedule.setPassword(scheduleDetails.getPassword());
				
				Schedule updatedSchedule = schedulerepository.save(schedule);
			 ResponseEntity.ok(updatedSchedule);
				return REDIRECT;
			}
			
			@DeleteMapping("/schedules/{id}")
			public String deleteSchedule(@PathVariable Long id){
				Schedule schedule = schedulerepository.findById(id)
						.orElseThrow(() -> new RecordingNoFoundException("Recording not exist with id :" + id));
				schedulerepository.delete(schedule);
				Map<String, Boolean> response = new HashMap<>();
				response.put("deleted", Boolean.TRUE);
				ResponseEntity.ok(response);
				return REDIRECT;
				
			}
}
	