package in.edac.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class User {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private int userid;
	private String username;
	private String password;
	private String email;
	
	@JsonIgnore
	
	//@OneToMany(mappedBy = "user")
	//private List<Feedback> feedback;
	
	@OneToMany(cascade= CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "user") //cascade used since once user saved related info contact saves auto
	private List<Feedback> feedback=new ArrayList<>();

	
	@JsonIgnore
	//@OneToMany(mappedBy = "user")
	//private List<Message> message;

	@OneToMany(cascade= CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "user") //cascade used since once user saved related info contact saves auto
	private List<Message> message=new ArrayList<>();

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(int userid,String username, String password, String email) {
		super();
		this.userid = userid;
		this.username = username;
		this.password = password;
		this.email = email;
	}

	
	
	

	public List<Feedback> getFeedback() {
		return feedback;
	}

	public void setFeedback(List<Feedback> feedback) {
		this.feedback = feedback;
	}

	public List<Message> getMessage() {
		return message;
	}

	public void setMessage(List<Message> message) {
		this.message = message;
	}

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
}