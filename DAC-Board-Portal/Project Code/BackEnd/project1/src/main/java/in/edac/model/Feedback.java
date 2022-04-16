package in.edac.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Transient;

@Entity
public class Feedback {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@ManyToOne
	
	// @JoinColumn(name = "user_id")
	private User user;
	
	
	
//	@ManyToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name = "user_name")
//	private User user2;
	
	
	private String comments;
	@Transient
	private int userid;
	
	@Transient
	private String username;

	

	public Feedback() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Feedback(User user, String comments) {
		super();
		this.user = user;
		this.comments = comments;
	}

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	

}