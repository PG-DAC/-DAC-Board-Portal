package in.edac.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;


@Entity
@Table(name="message")
public class Message {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	/*@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id")*/
	
	@ManyToOne
	private User user;
	
//	@ManyToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name = "user_name")
//	private User user2;
	
	
	@Column(name="message")
	private String Message;
	
	@Transient
	private int userid;
	
	@Transient
	private String username;


	
	
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public Message() {
		super();
		
	}

	public Message(String message) {
		super();
		Message = message;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getMessage() {
		return Message;
	}

	public void setMessage(String message) {
		Message = message;
	}
	
	
}