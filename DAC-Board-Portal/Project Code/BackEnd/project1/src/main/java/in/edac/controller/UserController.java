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
import in.edac.model.User;
import in.edac.repository.FeedbackRepository;
import in.edac.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:3000")//allow the server for accessing the data
@RestController//res.body+controller 
@RequestMapping("/api")
public class UserController {
	
	public static final String REDIRECT = "redirect:/";

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private FeedbackRepository feedbackRepository;
	
	@GetMapping("/users")
	public List<User> getUsers(){
		return this.userRepository.findAll();
	}
	
	@PostMapping("/users")
	public String registerUser(@RequestBody User user){
	
		userRepository.save(user);
		return REDIRECT;
	}
	
	@PostMapping("/loginusers")
	public User loginUser(@RequestBody User user){
		User user1=null ;
		
			try {
				user1 =userRepository.findByUsernameAndPassword(user.getUsername(),user.getPassword());
				if(user1!=null) {
					return user1;
				}else {
					return user1;
				}
			} catch (Exception e) {
				e.printStackTrace();
				return user1;
			}
		}

	
	@PostMapping("/feedback")
	public String feedbackUser(@RequestBody Feedback feedback){
	     User user = userRepository.findById(feedback.getUserid()).get();
//	     User user2 = userRepository.findByUsername(feedback.getUsername()).get();
		// user.setFeedback(feedback);
		 feedback.setUser(user);
//		 feedback.setUser(user2);
		  feedbackRepository.save(feedback);
		  
		  return REDIRECT;
	   
	}	
	
	@GetMapping("/admin-feedback")
	public List<Feedback> getFeedback(){
		return this.feedbackRepository.findAll();
	}

	}