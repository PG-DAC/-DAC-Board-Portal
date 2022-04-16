package in.edac.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
import in.edac.repository.RecordingRepository;
import in.edac.model.Recording;

@CrossOrigin(origins ="http://localhost:3000" )
@RestController
@RequestMapping("/a")
public class RecordingController {
	
	public static final String REDIRECT = "redirect:/";
	
	@Autowired
	private RecordingRepository recordingRepository;

	@GetMapping("/rec")
	public List<Recording> getAllRecording(){
		return  recordingRepository.findAll();
	}
	@PostMapping("/rec")
	public String createRecording(@RequestBody Recording recording) {
		 recordingRepository.save(recording);
		
		return REDIRECT;
	}
	
		@GetMapping("/rec/{id}")
		public ResponseEntity<Recording> getRecordingById(@PathVariable Long id) {
			Recording recording = recordingRepository.findById(id)
					.orElseThrow(() -> new RecordingNoFoundException("Recording not exist with id :" + id));
			return ResponseEntity.ok(recording);
		}
		
		
		
		@PutMapping("/rec/{id}")
		public String updateRecording(@PathVariable Long id, @RequestBody Recording recordingDetails){
			Recording recording = recordingRepository.findById(id)
					.orElseThrow(() -> new RecordingNoFoundException("Recording not exist with id :" + id));
			
			recording.setTopicName(recordingDetails.getTopicName());
			recording.setDate(recordingDetails.getDate());
			recording.setPasscode(recordingDetails.getPasscode());
			recording.setLink(recordingDetails.getLink());
			
			Recording updatedRecording = recordingRepository.save(recording);
		   ResponseEntity.ok(updatedRecording);
			return REDIRECT;
		}
		

		@DeleteMapping("/rec/{id}")
		public String deleteRecording(@PathVariable Long id){
			Recording recording = recordingRepository.findById(id)
					.orElseThrow(() -> new RecordingNoFoundException("Recording not exist with id :" + id));
			recordingRepository.delete(recording);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			 ResponseEntity.ok(response);
			return REDIRECT;
		}
	
	
}