package in.edac.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.edac.model.Feedback;
import in.edac.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{
	  
	User findByUsernameAndPassword(String username,String password);



//	Optional<User> findByUsername(String username);



	

	

	

	
}