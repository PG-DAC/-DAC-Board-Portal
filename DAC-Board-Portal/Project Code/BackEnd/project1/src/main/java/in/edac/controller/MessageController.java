package in.edac.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import in.edac.model.Feedback;
import in.edac.model.Message;
import in.edac.model.User;
import in.edac.repository.MessageRepository;
import in.edac.repository.UserRepository;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping("/mes")
public class MessageController {
	
	
	public static final String REDIRECT = "redirect:/";
	
	
	
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private MessageRepository messageRepository;
	
	@GetMapping("/mesget")
	public List<Message>getAllMessage(){
		return messageRepository.findAll();
		
		
		
	}
	
	
	
//	@PostMapping("/mesget")
//	public Message createMessage(@RequestBody Message message ) {
//    return messageRepository.save(message);
//	}
	
	@PostMapping("/mesget")
	public String createMessage(@RequestBody Message message){
	     User user = userRepository.findById(message.getUserid()).get();
//	     User user2 = userRepository.findByUsername(message.getUsername()).get();
		// user.setMessage(message);
//		 message.setUser(user2);
		 message.setUser(user);
	    messageRepository.save(message);
	    return REDIRECT;
	    
	}	
}